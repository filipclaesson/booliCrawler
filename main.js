var aptgetter = require('./aptgetter.js');
var db = require('./pgdb.js');
var async = require("async");

areas = getOmraden()
tuples = getTuples()
date = '20160627' // Datument exkluders 
// Körde senast 16 juli


aptgetter.createCSVrecursive(areas, date)




function getOmraden(){
	areas = [
	{
"areaCode" : 874648,
"subArea" : "EnskedeGard",
"area" : "GronHagsatra"
},
{
"areaCode" : 1454,
"subArea" : "GamlaEnskede",
"area" : "GronHagsatra"
},
{
"areaCode" : 4175,
"subArea" : "Gubbangen",
"area" : "GronHagsatra"
},
{
"areaCode" : 221,
"subArea" : "Stureby",
"area" : "GronHagsatra"
},
{
"areaCode" : 21723,
"subArea" : "Svedmyra",
"area" : "GronHagsatra"
},
{
"areaCode" : 787,
"subArea" : "Bandhagen",
"area" : "GronHagsatra"
},
{
"areaCode" : 2115,
"subArea" : "Hogdalen",
"area" : "GronHagsatra"
},
{
"areaCode" : 6553,
"subArea" : "Ragsved",
"area" : "GronHagsatra"
},
{
"areaCode" : 30,
"subArea" : "Hagerstensasen",
"area" : "RodFruangen"
},
{
"areaCode" : 1381,
"subArea" : "Fruangen",
"area" : "RodFruangen"
},
{
"areaCode" : 874654,
"subArea" : "Liljeholmen",
"area" : "RodFruangen"
},
{
"areaCode" : 874697,
"subArea" : "Midsommarkransen",
"area" : "RodFruangen"
},
{
"areaCode" : 1425,
"subArea" : "Vastertorp",
"area" : "RodFruangen"
},
{
"areaCode" : 874661,
"subArea" : "Aspudden",
"area" : "RodNorsborg"
},
{
"areaCode" : 874646,
"subArea" : "Grondal",
"area" : "RodNorsborg"
},
{
"areaCode" : 318143,
"subArea" : "Malarhojden",
"area" : "RodNorsborg"
},
{
"areaCode" : 14232,
"subArea" : "Fittja",
"area" : "RodNorsborg"
},
{
"areaCode" : 1774,
"subArea" : "Varby",
"area" : "RodNorsborg"
},
{
"areaCode" : 2640,
"subArea" : "Satra",
"area" : "RodNorsborg"
},
{
"areaCode" : 1276,
"subArea" : "Varberg",
"area" : "RodNorsborg"
},
{
"areaCode" : 2675,
"subArea" : "Bredang",
"area" : "RodNorsborg"
},
{
"areaCode" : 1140,
"subArea" : "Segeltorp",
"area" : "RodNorsborg"
},
{
"areaCode" : 874652,
"subArea" : "Hammarbyhojden",
"area" : "GronSkarpnack"
},
{
"areaCode" : 8521,
"subArea" : "Karrtorp",
"area" : "GronSkarpnack"
},
{
"areaCode" : 874650,
"subArea" : "Bagarmossen",
"area" : "GronSkarpnack"
},
{
"areaCode" : 2474,
"subArea" : "Skarpnack",
"area" : "GronSkarpnack"
},
{
"areaCode" : 7197,
"subArea" : "Katarina",
"area" : "Sodermalm"
},
{
"areaCode" : 4796,
"subArea" : "Sofia",
"area" : "Sodermalm"
},
{
"areaCode" : 8069,
"subArea" : "Maria",
"area" : "Sodermalm"
},
{
"areaCode" : 845555,
"subArea" : "Hornstull",
"area" : "Sodermalm"
},
{
"areaCode" : 300476,
"subArea" : "Zinkensdamm",
"area" : "Sodermalm"
},
{
"areaCode" : 874680,
"subArea" : "Tullgarden",
"area" : "Sodermalm"
},
{
"areaCode" : 351791,
"subArea" : "helgalunden",
"area" : "Sodermalm"
},
{
"areaCode" : 115342,
"subArea" : "Reimersholme",
"area" : "Sodermalm"
},
{
"areaCode" : 931427,
"subArea" : "VastraKungsholmen",
"area" : "Kungsholmen"
},
{
"areaCode" : 3598,
"subArea" : "Fredhall",
"area" : "Kungsholmen"
},
{
"areaCode" : 116807,
"subArea" : "Marieberg",
"area" : "Kungsholmen"
},
{
"areaCode" : 826197,
"subArea" : "FramreKungsholmen",
"area" : "Kungsholmen"
},
{
"areaCode" : 115349,
"subArea" : "Vasastan",
"area" : "City"
},
{
"areaCode" : 115350,
"subArea" : "Norrmalm",
"area" : "City"
},
{
"areaCode" : 115348,
"subArea" : "Ostermalm",
"area" : "City"
},
{
"areaCode" : 874660,
"subArea" : "Traneberg",
"area" : "GronHasselby"
},
{
"areaCode" : 874659,
"subArea" : "Alvik",
"area" : "GronHasselby"
},
{
"areaCode" : 72510,
"subArea" : "Appelviken",
"area" : "GronHasselby"
},
{
"areaCode" : 74934,
"subArea" : "StoraMossen",
"area" : "GronHasselby"
},
{
"areaCode" : 874656,
"subArea" : "Riksby",
"area" : "GronHasselby"
},
{
"areaCode" : 867414,
"subArea" : "Abrahamsberg",
"area" : "GronHasselby"
},
{
"areaCode" : 27567,
"subArea" : "Akeslund",
"area" : "GronHasselby"
},
{
"areaCode" : 172444,
"subArea" : "Akeshov",
"area" : "GronHasselby"
},
{
"areaCode" : 75722,
"subArea" : "Olovslund",
"area" : "GronHasselby"
},
{
"areaCode" : 122122,
"subArea" : "SodraAngby",
"area" : "GronHasselby"
},
{
"areaCode" : 14698,
"subArea" : "NorraAngby",
"area" : ",GronHasselby"
},
{
"areaCode" : 10927,
"subArea" : "Blackeberg",
"area" : "GronHasselby"
},
{
"areaCode" : 393540,
"subArea" : "Vallingby",
"area" : "GronHasselby"
},
{
"areaCode" : 753,
"subArea" : "Hagalund",
"area" : "BlaSolna"
},
{
"areaCode" : 7568,
"subArea" : "CentralaSolna",
"area" : "BlaSolna"
},
{
"areaCode" : 9555,
"subArea" : "Jarvastaden",
"area" : "BlaSolna"
},
{
"areaCode" : 891944,
"subArea" : "Hallonbergen",
"area" : "BlaSolna"
},
{
"areaCode" : 4790,
"subArea" : "Ursvik",
"area" : "BlaSolna"
},
{
"areaCode" : 393539,
"subArea" : "Kista",
"area" : "BlaSolna"
},
{
"areaCode" : 380138,
"subArea" : "Rasunda",
"area" : "BlaSolna"
},
{
"areaCode" : 39,
"subArea" : "Huvudsta",
"area" : "BlaSundbyberg"
},
{
"areaCode" : 7300,
"subArea" : "SundbybergCentrum",
"area" : "BlaSundbyberg"
},
{
"areaCode" : 9955,
"subArea" : "Mariehall",
"area" : "BlaSundbyberg"
},
{
"areaCode" : 1227,
"subArea" : "Duvbo",
"area" : "BlaSundbyberg"
},
{
"areaCode" : 384576,
"subArea" : "Tulemarken",
"area" : "BlaSundbyberg"
}]

	

	return areas

}

function getTuples(){
	tuples = [
	 {
	   "date":"2016-06-21",
	   "address":"SpannvÃ¤gen 23",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":2,
	   "sqm":50,
	   "floor":null,
	   "objectType":"LÃ¤genhet",
	   "constructionYear":null,
	   "listPrice":2495000,
	   "priceUp":305000,
	   "soldPrice":2800000,
	   "rent":3141,
	   "broker":"Erik Olsson FastighetsfÃ¶rmedling",
	   "distanceToMetro":382.5445668792806,
	   "metro":"Brommaplan"
	 },
	 {
	   "date":"2016-06-10",
	   "address":"GrundlÃ¤ggarvÃ¤gen 10",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":3,
	   "sqm":60,
	   "floor":"2",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":"1940",
	   "listPrice":3245000,
	   "priceUp":0,
	   "soldPrice":3245000,
	   "rent":3623,
	   "broker":"LÃ¤nsfÃ¶rsÃ¤kringar FastighetsfÃ¶rmedling",
	   "distanceToMetro":769.4029713172025,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-06-09",
	   "address":"RÃ¶rlÃ¤ggarvÃ¤gen 44",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":3,
	   "sqm":77,
	   "floor":"1",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":"1938",
	   "listPrice":3495000,
	   "priceUp":255000,
	   "soldPrice":3750000,
	   "rent":4492,
	   "broker":"LÃ¤nsfÃ¶rsÃ¤kringar FastighetsfÃ¶rmedling",
	   "distanceToMetro":660.2069911912414,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-05-30",
	   "address":"ArkitektvÃ¤gen 73",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":2.5,
	   "sqm":51,
	   "floor":"3",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":null,
	   "listPrice":2595000,
	   "priceUp":120000,
	   "soldPrice":2715000,
	   "rent":3217,
	   "broker":"Svenska MÃ¤klarhuset",
	   "distanceToMetro":584.5331649010066,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-05-30",
	   "address":"ArkitektvÃ¤gen 50",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":3,
	   "sqm":60,
	   "floor":"1",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":null,
	   "listPrice":2995000,
	   "priceUp":215000,
	   "soldPrice":3210000,
	   "rent":3459,
	   "broker":"Svenska MÃ¤klarhuset",
	   "distanceToMetro":544.4440762707229,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-05-26",
	   "address":"Gustav III:s vÃ¤g 11",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":2,
	   "sqm":55,
	   "floor":"1",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":"1939",
	   "listPrice":2745000,
	   "priceUp":255000,
	   "soldPrice":3000000,
	   "rent":3246,
	   "broker":"HusmanHagberg",
	   "distanceToMetro":389.78554405718006,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-05-26",
	   "address":"GrundlÃ¤ggarvÃ¤gen 35",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":2,
	   "sqm":41,
	   "floor":"3",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":"1939",
	   "listPrice":2195000,
	   "priceUp":305000,
	   "soldPrice":2500000,
	   "rent":2506,
	   "broker":"FastighetsbyrÃ¥n",
	   "distanceToMetro":649.7012811448338,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-05-26",
	   "address":"SpannvÃ¤gen 25",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":2,
	   "sqm":51,
	   "floor":"2",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":"1942",
	   "listPrice":2495000,
	   "priceUp":385000,
	   "soldPrice":2880000,
	   "rent":3158,
	   "broker":"FastighetsbyrÃ¥n",
	   "distanceToMetro":365.4460559839786,
	   "metro":"Brommaplan"
	 },
	 {
	   "date":"2016-05-25",
	   "address":"SpannvÃ¤gen 46",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":4,
	   "sqm":90.5,
	   "floor":"1",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":"2008",
	   "listPrice":4995000,
	   "priceUp":865000,
	   "soldPrice":5860000,
	   "rent":5697,
	   "broker":"FastighetsbyrÃ¥n",
	   "distanceToMetro":366.51284181363724,
	   "metro":"Brommaplan"
	 },
	 {
	   "date":"2016-05-19",
	   "address":"RÃ¶rlÃ¤ggarvÃ¤gen 42",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":1.5,
	   "sqm":43,
	   "floor":"1",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":null,
	   "listPrice":2150000,
	   "priceUp":400000,
	   "soldPrice":2550000,
	   "rent":2509,
	   "broker":"Svenska MÃ¤klarhuset",
	   "distanceToMetro":669.5157518099553,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-05-19",
	   "address":"ByggmÃ¤starvÃ¤gen 35",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":2,
	   "sqm":50,
	   "floor":"2",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":"1943",
	   "listPrice":2595000,
	   "priceUp":225000,
	   "soldPrice":2820000,
	   "rent":2956,
	   "broker":"LÃ¤nsfÃ¶rsÃ¤kringar FastighetsfÃ¶rmedling",
	   "distanceToMetro":536.9067973986546,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-05-19",
	   "address":"SpannvÃ¤gen 18",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":2,
	   "sqm":52,
	   "floor":"2",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":"1942",
	   "listPrice":2495000,
	   "priceUp":495000,
	   "soldPrice":2990000,
	   "rent":3252,
	   "broker":"Notar",
	   "distanceToMetro":344.65660937228665,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-05-18",
	   "address":"ByggmÃ¤starvÃ¤gen 10",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":2.5,
	   "sqm":55,
	   "floor":"3",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":null,
	   "listPrice":2695000,
	   "priceUp":705000,
	   "soldPrice":3400000,
	   "rent":3130,
	   "broker":"Svenska MÃ¤klarhuset",
	   "distanceToMetro":421.9568806283379,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-05-15",
	   "address":"ArkitektvÃ¤gen 8",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":2,
	   "sqm":40,
	   "floor":"1",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":null,
	   "listPrice":1995000,
	   "priceUp":305000,
	   "soldPrice":2300000,
	   "rent":3168,
	   "broker":"Svenska MÃ¤klarhuset",
	   "distanceToMetro":305.1141036853333,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-05-12",
	   "address":"RegistervÃ¤gen 10",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":3,
	   "sqm":63,
	   "floor":"2",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":null,
	   "listPrice":2495000,
	   "priceUp":420000,
	   "soldPrice":2915000,
	   "rent":3811,
	   "broker":"Svenska MÃ¤klarhuset",
	   "distanceToMetro":23.366595236780313,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-05-12",
	   "address":"MurarvÃ¤gen 11",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":2,
	   "sqm":40,
	   "floor":"1",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":"1939",
	   "listPrice":2195000,
	   "priceUp":375000,
	   "soldPrice":2570000,
	   "rent":2325,
	   "broker":"FastighetsbyrÃ¥n",
	   "distanceToMetro":551.8864848171053,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-05-12",
	   "address":"RÃ¶rlÃ¤ggarvÃ¤gen 17",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":2,
	   "sqm":53,
	   "floor":"2",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":null,
	   "listPrice":2495000,
	   "priceUp":625000,
	   "soldPrice":3120000,
	   "rent":2716,
	   "broker":"Svenska MÃ¤klarhuset",
	   "distanceToMetro":783.9718174714986,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-05-05",
	   "address":"ArkitektvÃ¤gen 37",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":2,
	   "sqm":45,
	   "floor":"3",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":"1943",
	   "listPrice":2595000,
	   "priceUp":105000,
	   "soldPrice":2700000,
	   "rent":2351,
	   "broker":"LÃ¤nsfÃ¶rsÃ¤kringar FastighetsfÃ¶rmedling",
	   "distanceToMetro":507.26669646364974,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-05-03",
	   "address":"AbrahamsbergsvÃ¤gen 40",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":2.5,
	   "sqm":53,
	   "floor":null,
	   "objectType":"LÃ¤genhet",
	   "constructionYear":"1939",
	   "listPrice":2950000,
	   "priceUp":450000,
	   "soldPrice":3400000,
	   "rent":3159,
	   "broker":"MÃ¤klare SjÃ¶gren",
	   "distanceToMetro":379.75747730407346,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-04-29",
	   "address":"SpannvÃ¤gen 18",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":2,
	   "sqm":50,
	   "floor":"1",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":"1942",
	   "listPrice":2395000,
	   "priceUp":0,
	   "soldPrice":2395000,
	   "rent":3238,
	   "broker":"Svensk FastighetsfÃ¶rmedling",
	   "distanceToMetro":344.65660937228665,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-04-27",
	   "address":"RegistervÃ¤gen 24",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":2,
	   "sqm":40,
	   "floor":"2",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":"1944",
	   "listPrice":1990000,
	   "priceUp":610000,
	   "soldPrice":2600000,
	   "rent":1828,
	   "broker":"Notar",
	   "distanceToMetro":116.1001270685837,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-04-27",
	   "address":"AbrahamsbergsvÃ¤gen 80",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":2,
	   "sqm":46,
	   "floor":"2",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":"1939",
	   "listPrice":2150000,
	   "priceUp":550000,
	   "soldPrice":2700000,
	   "rent":2850,
	   "broker":"FastighetsbyrÃ¥n",
	   "distanceToMetro":773.6634649835536,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-04-26",
	   "address":"StopvÃ¤gen 71",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":2,
	   "sqm":41,
	   "floor":"3",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":"1940",
	   "listPrice":2195000,
	   "priceUp":435000,
	   "soldPrice":2630000,
	   "rent":2781,
	   "broker":"Notar",
	   "distanceToMetro":324.53377082231543,
	   "metro":"Brommaplan"
	 },
	 {
	   "date":"2016-04-22",
	   "address":"ByggmÃ¤starvÃ¤gen 22",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":2,
	   "sqm":48,
	   "floor":"3",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":"1938",
	   "listPrice":2595000,
	   "priceUp":235000,
	   "soldPrice":2830000,
	   "rent":2621,
	   "broker":"Erik Olsson FastighetsfÃ¶rmedling",
	   "distanceToMetro":430.9122934142526,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-04-21",
	   "address":"SpannvÃ¤gen 9",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":2,
	   "sqm":40,
	   "floor":"3",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":"1942",
	   "listPrice":2150000,
	   "priceUp":350000,
	   "soldPrice":2500000,
	   "rent":2525,
	   "broker":"Notar",
	   "distanceToMetro":377.7884902606089,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-04-20",
	   "address":"ArkitektvÃ¤gen 30",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":2,
	   "sqm":59,
	   "floor":"1",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":"1939",
	   "listPrice":2495000,
	   "priceUp":455000,
	   "soldPrice":2950000,
	   "rent":3885,
	   "broker":"Erik Olsson FastighetsfÃ¶rmedling",
	   "distanceToMetro":405.0795889572837,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-04-20",
	   "address":"SpannvÃ¤gen 30",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":3,
	   "sqm":82,
	   "floor":"4",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":"2008",
	   "listPrice":4395000,
	   "priceUp":805000,
	   "soldPrice":5200000,
	   "rent":5158,
	   "broker":"LÃ¤nsfÃ¶rsÃ¤kringar FastighetsfÃ¶rmedling",
	   "distanceToMetro":312.2801059361109,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-04-15",
	   "address":"ByggmÃ¤starvÃ¤gen 27",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":2,
	   "sqm":48,
	   "floor":"2",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":"1939",
	   "listPrice":2495000,
	   "priceUp":405000,
	   "soldPrice":2900000,
	   "rent":3334,
	   "broker":"LÃ¤nsfÃ¶rsÃ¤kringar FastighetsfÃ¶rmedling",
	   "distanceToMetro":484.7529815787283,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-04-15",
	   "address":"AbrahamsbergsvÃ¤gen 40",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":2.5,
	   "sqm":53,
	   "floor":"2",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":"1939",
	   "listPrice":2595000,
	   "priceUp":1105000,
	   "soldPrice":3700000,
	   "rent":3064,
	   "broker":"FastighetsbyrÃ¥n",
	   "distanceToMetro":379.75747730407346,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-04-15",
	   "address":"StopvÃ¤gen 41",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":2,
	   "sqm":47,
	   "floor":"1",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":null,
	   "listPrice":2195000,
	   "priceUp":365000,
	   "soldPrice":2560000,
	   "rent":2578,
	   "broker":"Svenska MÃ¤klarhuset",
	   "distanceToMetro":437.4473659356884,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-04-14",
	   "address":"ByggmÃ¤starvÃ¤gen 17",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":3,
	   "sqm":50,
	   "floor":"1",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":"1942",
	   "listPrice":2495000,
	   "priceUp":80000,
	   "soldPrice":2575000,
	   "rent":3617,
	   "broker":"HusmanHagberg",
	   "distanceToMetro":421.7500553417335,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-04-14",
	   "address":"MurarvÃ¤gen 5",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":3,
	   "sqm":65,
	   "floor":"2",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":"1938",
	   "listPrice":3195000,
	   "priceUp":880000,
	   "soldPrice":4075000,
	   "rent":3358,
	   "broker":"FastighetsbyrÃ¥n",
	   "distanceToMetro":504.4346418079121,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-04-14",
	   "address":"SpannvÃ¤gen 14",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":3,
	   "sqm":72,
	   "floor":"3",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":"1942",
	   "listPrice":3795000,
	   "priceUp":705000,
	   "soldPrice":4500000,
	   "rent":4414,
	   "broker":"FastighetsbyrÃ¥n",
	   "distanceToMetro":346.9899054994645,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-04-08",
	   "address":"RÃ¶rlÃ¤ggarvÃ¤gen 15",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":2,
	   "sqm":42,
	   "floor":"3",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":"1939",
	   "listPrice":1995000,
	   "priceUp":555000,
	   "soldPrice":2550000,
	   "rent":2185,
	   "broker":"Notar",
	   "distanceToMetro":783.0789937463054,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-04-08",
	   "address":"SpannvÃ¤gen 26",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":2,
	   "sqm":40,
	   "floor":"3",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":null,
	   "listPrice":2250000,
	   "priceUp":410000,
	   "soldPrice":2660000,
	   "rent":2525,
	   "broker":"Svenska MÃ¤klarhuset",
	   "distanceToMetro":337.4391125271805,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-04-07",
	   "address":"ByggmÃ¤starvÃ¤gen 25",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":2,
	   "sqm":48,
	   "floor":"3",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":null,
	   "listPrice":2495000,
	   "priceUp":585000,
	   "soldPrice":3080000,
	   "rent":3334,
	   "broker":"Svenska MÃ¤klarhuset",
	   "distanceToMetro":488.38912305079907,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-04-06",
	   "address":"SpannvÃ¤gen 20",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":3,
	   "sqm":68,
	   "floor":null,
	   "objectType":"LÃ¤genhet",
	   "constructionYear":"1942",
	   "listPrice":3450000,
	   "priceUp":800000,
	   "soldPrice":4250000,
	   "rent":4414,
	   "broker":"MÃ¤klare SjÃ¶gren",
	   "distanceToMetro":333.6973318801782,
	   "metro":"Abrahamsberg"
	 },
	 {
	   "date":"2016-04-02",
	   "address":"ArkitektvÃ¤gen 60",
	   "subArea":"Abrahamsberg",
	   "area":"GronHasselby",
	   "room":2,
	   "sqm":35,
	   "floor":"2",
	   "objectType":"LÃ¤genhet",
	   "constructionYear":"1938",
	   "listPrice":1995000,
	   "priceUp":535000,
	   "soldPrice":2530000,
	   "rent":2133,
	   "broker":"Erik Olsson FastighetsfÃ¶rmedling",
	   "distanceToMetro":597.9704220552005,
	   "metro":"Abrahamsberg"
	 }
	]

	return tuples
}