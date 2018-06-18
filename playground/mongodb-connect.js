//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);
return false;

MongoClient.connect("mongodb://127.0.0.1:27017/TodoApp", (err, db) =>{
	if(err){
		console.log("Unable to connect with Mongo DB");
	}
	else {
		console.log("Connected");
	}
	
	/* db.collection('Todos').insertOne({
		text:"Something to do",
		completed:false
	}, (err, result) =>{
		if(err){
			console.log("Unable to insert",err);			
		}
		console.log(JSON.stringify(result.ops, undefined,2));
	});*/
	
	db.collection("users").insertOne({
		name:"Ishant",
		age:25,
		location:"Chd"
	}, (err,result) => {
		if(err){
			console.log("Unable to insert new doc",err);
		}
		
		console.log(JSON.stringify(result.ops, undefined,2));
	});
	
	db.close();
	
});