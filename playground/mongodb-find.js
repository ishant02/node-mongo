const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) =>{
	
	if(err){
		console.log("Unable to connect with DB",err);
	}
	else {
		console.log("Connected with DB");
	}
	
	
	/* db.collection("Todos").find({completed:false}).toArray().then((docs) => {
		console.log("Todos");
		console.log(JSON.stringify(docs,undefined,2));
	}, (err)=> {
		console.log("Unable to fetch todos",err);
	}); */
	
	/* db.collection("Todos").find().count().then((count) => {
		console.log(`Todos count:${count}`);
		//console.log(JSON.stringify(docs,undefined,2));
	}, (err)=> {
		console.log("Unable to fetch todos",err);
	}); */
	
	db.collection("users").find({name:"Ishant"}).toArray().then((res) => {
		console.log("Users")
		console.log(JSON.stringify(res,undefined,2))
	}, (err) => {
		console.log("unable to fetch:",err);
	});
	db.close();
});