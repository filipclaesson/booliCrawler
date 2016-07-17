var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/booliData';



//var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
//query.on('end', function() { client.end(); });

var insert = function(table, data){
	var client = new pg.Client(connectionString);
	client.connect();
	len = Object.keys(data).length // number of keys in json object
	tableColumns = ""
	values = ""
	queryString = 'INSERT INTO ' + table + ' ('
	for (var i = 0, len; i < len; i++) {
		key = Object.keys(data)[i]
		tableColumns = tableColumns  +  Object.keys(data)[i] 
		values = values + "'" + data[key] + "'"
		if (i != len-1){
			tableColumns = tableColumns +", ";
			values = values +", ";
		}
	}
	queryString = queryString + tableColumns + ') VALUES (' + values +")"
	console.log(queryString)
	var query = client.query(queryString);
	query.on('end', function() { client.end(); });
}


var insert2 = function(table, data){
	var client = new pg.Client(connectionString);
	client.connect();
    // create table column names
    tableColumns = ""
	columnNames = ""
	values = []
    len = Object.keys(data[0]).length 
    queryString = 'INSERT INTO ' + table + ' ('
    for (var i = 0, len; i < len; i++) {
		key = Object.keys(data[0])[i]
		values.push(data[0][key])
		tableColumns = tableColumns  +  Object.keys(data[0])[i] 
		columnNames = columnNames + "$" + (1+i) + ''
		if (i != len-1){
			tableColumns = tableColumns +", ";
			columnNames = columnNames +", ";
		}
	}
	//console.log(values)
	queryString = queryString + tableColumns + ') VALUES(' + columnNames + ')' 
	var query = client.query(queryString, values);
	query.on('end', function() { client.end(); });
	console.log(queryString)
}


var multiInsert = function(table, data, callback, params){
	
	var client = new pg.Client(connectionString);
    client.on('drain', client.end.bind(client)); //disconnect client when all queries are finished
    client.connect();
    
    // create table column names
    tableColumns = ""
	columnNames = ""
	values = []
	//create db statement
	console.log("data 0" )
    
    len = Object.keys(data[0]).length 
    queryString = 'INSERT INTO ' + table + ' ('
    for (var i = 0, len; i < len; i++) {
		key = Object.keys(data[0])[i]
		

		tableColumns = tableColumns + Object.keys(data[0])[i] 
		columnNames = columnNames + "$" + (i+1) + ''
		if (i != len-1){
			tableColumns = tableColumns +", ";
			columnNames = columnNames +", ";
		}
	}
	queryString = queryString + tableColumns + ') VALUES(' + columnNames + ')' 

	//fill lists with data
	listlen = data.length
	for (var i = 0, listlen; i < listlen; i++) {
		len = Object.keys(data[0]).length
		value = []
		for (var j = 0, len; j < len; j++) {
			key = Object.keys(data[i])[j]
			value.push(data[i][key])
		}
		values.push(value)
	}
	

	
	
	for (var i = 0, listlen; i < listlen; i++) {
		client.query({
		    text : queryString, 
		    values: values[i],
		    name : "multi-insert"
		});
	}
	
	console.log(queryString)
	if (params != undefined){
		callback(params)
	}
}




module.exports = {
  insert: insert,
  insert2: insert2,
  multiInsert: multiInsert
}
