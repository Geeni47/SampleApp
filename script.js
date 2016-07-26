var express = require('express');
var mysql = require('mysql');
var app = express(); 

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'sampleDB'
});

connection.connect(function(error){
	if(!!error){
		console.log("error db");
	}else{
		console.log("Database Connected :: 1");
	}
});

app.get('/',function(req,resp){

	connection.query("select * from sampletable",function(error,rows,fields){
		
		if(!!error){
				console.log("error in query");
			}else{
				console.log("Database Connected :: successfull query");
			}

	});

})
app.listen(1337);