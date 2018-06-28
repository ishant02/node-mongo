//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) =>{
	
	if(err){
		console.log("Unable to connect with DB",err);
	}
	else {
		console.log("Connected with DB");
	}
	
	/* db.collection("Todos").deleteMany({text:"Eat Lunch"}).then((res)=>{
		console.log(res);
	}); */
	
	/* db.collection("Todos").deleteOne({text:"Eat Lunch"}).then((res)=>{
		console.log(res);
	}); */
	
	/* db.collection("Todos").findOneAndDelete({completed:false}).then((res)=>{
		console.log(res);
	}); */
	
	db.collection("users").findOneAndDelete({
		_id: new ObjectID("5b2787639fe04110c05ecab1")
	}).then((res) => {
		console.log(res);
	});
	//db.close();
});