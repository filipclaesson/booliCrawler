var http = require('http');
var querystring = require('querystring');
var fs = require('fs');
var converter = require('json-2-csv');
var distanceGetter = require('./distancegetter.js');
var db = require('./pgdb.js');



areaList = []

var aptList = [];
var subArea = "";
var bigArea = "";


var createCSVrecursive = function(areas, date){
  aptList.length = 0
  area = areas.pop()

  console.log("areaCode: ", area.areaCode)
  console.log("subAreaIn: ", area.subArea)
  console.log("area: ",area.area)
  
  console.log("LÄNGDEN ÄR NU: ", aptList.length)
  subArea = area.subArea;
  bigArea = area.area;
  getListLength(getQueryString(area.areaCode, 10, 0, date), area.areaCode, createCSVrecursive, areas);
}


/* Function that will be used to start the procedure of printing all aptments to a CSV
 *
 * @param area is the search area where all aptsments will be printed to a CSV
 *
 */

var createcsvfromarea = function(areaCode, subAreaIn, area){
  console.log("areaCode: ", areaCode)
  console.log("subAreaIn: ", subAreaIn)
  console.log("area: ", area)
  aptList.length = 0
  console.log("LÄNGDEN ÄR NU: ", aptList.length)
  subArea = subAreaIn;
  bigArea = area;
  getListLength(getQueryString(areaCode, 10, 0), areaCode);
}

//createcsvfromarea(7300, "sudbybergcentrum");


/* Callback that will make all searched from the assigned 
 *
 * @param area is the search area where alla patsments will be printed to a CSV
 *
 */
function startFetchingProcedure(totHits, areaCode, createCSVrecursive, areas){
  

  times = Math.floor(totHits/500)+1;
  
  counter = 0;
  (function next() {
      if (counter++ >= times) return;
      setTimeout(function() {
          console.log("Nu görs hämtning ", counter, " av ", times)
          if(counter == times){
            console.log("sista hämtningen")
            get500(getQueryString(areaCode, 500, 500*(counter-1)), addToListAndPrint, createCSVrecursive, areas);
          }
          else{
            get500(getQueryString(areaCode, 500, 500*(counter-1)), addToList);
          }
          next();
      }, 2000);
  })();

}


/* Function creates a query string to sed to the Booli api
 *
 * @param area is the area number for locations
 * @param limit is the number of hits that should be retreived in every request
 * @param offset is the offset from the start on the hits
 *
 * returns a query string
 */
function getQueryString(areaCode, limit, offset){
  var crypto = require('crypto');
  var shasum = crypto.createHash('sha1');
  var auth2 = {};
  auth2.callerId = "kopbostad";
  auth2.time = Math.round(Date.now() / 1000);
  auth2.unique = crypto.randomBytes(Math.ceil(16/2)).toString("hex").slice(0, 16);
  auth2.hash = shasum.update(auth2.callerId + auth2.time + "PhdlcpnsSbNId0qHmWIyYNivCB6JfgTRwq0vQqU1" + auth2.unique).digest("hex");
  var limitString = "limit=" + limit + "&";
  var areaString = areaCode + "&";
  var offsetString = "offset=" + offset + "&";
  var dateString = "minSoldDate=" + date + "&";
  var url = "http://api.booli.se/sold?q="+ areaString + dateString +  limitString + offsetString + querystring.stringify(auth2);
  console.log(" QUERY STRING: " + url)
  return url;
}


/* Function retrieves the list length on the booli search
 *
 */
function getListLength(url, area, createCSVrecursive, areas){
 
 
  http.get(url, function (res) {

    var body = "";
    res.on('data', function(chunk) {
      body += chunk;
    });
    res.on('end', function() {
      var pageList = [];
      var apts = JSON.parse(body); 
      console.log ("total hits: " + apts.totalCount);
      startFetchingProcedure(apts.totalCount, area, createCSVrecursive, areas);
      
      //callback(pageList, end);
    });
  });
}


/* Function requests the data from Booli api 
 *
 * @param url is the request url that booli api needs
 * @callback is the function that handles the results from the url request
 * and is addToList
 */
function get500(url, callback, createCSVrecursive, areas){
  //console.log(url);
  http.get(url, function (res) {

    var body = "";
    res.on('data', function(chunk) {
      body += chunk;
    });
    res.on('end', function() {
      var pageList = [];
      var apts = JSON.parse(body); 
      //console.log(apts);

      

      // ---- Add every apt in list to bigList ---- // 
      for (var i = 0; i < apts.count; i++) {
        apt = setupAptObject(apts.sold[i]);
        pageList.push(apt);
      };

      callback(pageList,createCSVrecursive, areas);
    });
  });
}


/* Function is the callback that handels the json list returned from Booli api
 * If it is the last list from booli api the function will print hte whole list to a csv file with the writeToCSV function
 *
 * @param pageList is the array of hits that booli api returned
 * @param end is the boolean that is true if there are no more hits to retrieve from booli api
 */
function addToList(pageList,createCSVrecursive, areas){
  console.log("...");  
  for (var i = 0; i < pageList.length; i++) {
    aptList.push(pageList[i]);
  };
}


function addToListAndPrint(pageList,createCSVrecursive, areas){
  
  for (var i = 0; i < pageList.length; i++) {
    aptList.push(pageList[i]);
  };
  console.log("...");   
  console.log("längd på listan: " + aptList.length);
  console.log("----- Listan är slut -----");
  //writeToCSV(aptList,createCSVrecursive, areas);
  writeToDb(aptList,createCSVrecursive, areas);
  
}



/* Function inserts to the DB
 *
 * @param json is the JSON object to be converted in a csv file 
 */
function writeToDb(json, createCSVrecursive, areas){
  console.log("Saving file to database...")
  console.log("-------------------")
  console.log("name in printResult: " + subArea + ".csv")
  console.log("Length: " + json.length)
  
  listlen = json.length

  console.log(" antal transaktion att föra in i DB: " + listlen)
  if (listlen != 0){
    if (areas.length != 0){
      //createCSVrecursive(areas)
      db.multiInsert("booli_data", json, createCSVrecursive, areas)
    }else{
      db.multiInsert("booli_data", json)
    }
  }else{
    createCSVrecursive(areas);
  }
}

/* Function prints the json file to a csv file
 *
 * @param json is the JSON object to be converted in a csv file 
 */
function writeToCSV(json, createCSVrecursive, areas){
  console.log("Saving file ...")
  console.log("-------------------")
  console.log("name in printResult: " + subArea + ".csv")
  console.log("Length: " + json.length)

  for (var i = json.length - 1; i >= 0; i--) {
    console.log(json[i])
  };

  var json2csvCallback = function (err, csv) {
    console.log("name in json2csv: " + subArea + ".csv")

    if (err) throw err;
    //console.log(csv);
    name = subArea;
    //remove file if exsists
    try {
      console.log("removed" + name + '.csv')
      stats = fs.lstatSync('./csv/' + name + '.csv');
      if (stats.isFile()) {
          fs.unlink('./csv/' + name + '.csv')
      }
    }
    catch (e) {
      console.log("it is not a file")
    }

    fs.writeFile('./csv/' + name + '.csv', csv, function(err) {
    if (err) throw err;
      console.log('file saved');
      console.log("-------------------")
    });
    aptList.length = 0
    if (areas.length != 0){
      createCSVrecursive(areas)
    }
  };

  converter.json2csv(aptList, json2csvCallback);
  
}

function removeComma(text){
  return text.replace(/,/g , "newchar");
}

function checkNumber(data){
  if (typeof data != "number"){ 
    return undefined
  }else{
    return data
  }
}

/* Function takes out the important data from each apt object and returns a formatted aptObject
 *
 * @param aptIn is an unformatted json object thtat need formatting
 */
function setupAptObject(aptIn){
  var apt = {
        "date":"",
        "address": "",
        "subArea" : "",
        "area": "",
        "room":"",
        "sqm": "",
        "floor": "",
        "objectType": "",
        "constructionYear": "",
        "listPrice": "",
        "priceUp": "",
        "soldPrice": "",
        "rent": "",
        "broker": "",
        "lon": "",
        "lat": "",
        "distanceToMetro":"",
        "metro":""
      }


      // --- tbana
      lat = aptIn.location.position.latitude;
      lon = aptIn.location.position.longitude;
      tbana = distanceGetter.getDistanceFromLatLonInKm(lat,lon,0,0)


      apt.date = aptIn.soldDate;
      apt.address = removeComma(aptIn.location.address['streetAddress']);
      apt.subArea = subArea;
      apt.area = bigArea;
      apt.room = checkNumber(aptIn.rooms);
      apt.floor = checkNumber(aptIn.floor);
      apt.sqm = checkNumber(aptIn.livingArea);
      apt.listPrice = checkNumber(aptIn.listPrice);
      apt.priceUp = checkNumber(aptIn.soldPrice - aptIn.listPrice);
      apt.soldPrice = checkNumber(aptIn.soldPrice);
      apt.rent = checkNumber(aptIn.rent);
      apt.constructionYear = checkNumber(aptIn.constructionYear);
      apt.objectType = aptIn.objectType;
      apt.broker = aptIn.source.name;
      apt.lon = lon;
      apt.lat = lat;
      apt.distanceToMetro = tbana[0]
      apt.metro = tbana[1]

      return apt;
}




module.exports = {
  createcsvfromarea: createcsvfromarea,
  createCSVrecursive: createCSVrecursive,
  writeToDb: writeToDb


}


/*
√•  å alt-j alt-q
√§  ä alt-j alt-6
√∂  ö alt-j alt-d
√Ö  Å alt-j Ö
√Ñ  Ä alt-j, alt ^, shift n 
√ñ  Ö alt-j, alt ^, n
*/
