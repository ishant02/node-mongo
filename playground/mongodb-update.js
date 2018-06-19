const {MongoClient,ObjectID} = require("mongodb");


MongoClient.connect("mongodb://localhost:27017/TodoApp", (err,db) => {
	if(err)
		console.log("Unable to connect with DB");
	else 
		console.log("Connected with DB");
	
	/* db.collection('Todos').findOneAndUpdate({
		_id:new ObjectID("5b2399a5743c151bd08ccdac")
	},
	{
	$set:{
			completed:true
		}
	},
	{
		returnOriginal:false
	}).then((res) => {
		console.log(res);	
	}); */
	
	
	db.collection('users').findOneAndUpdate(
	{
		_id:new ObjectID("5b27876e9fe04110c05ecab2")
	},
	{
		$set:{name:"Vikram"	},
		$inc: {age:1}
	},
	{
		returnOriginal:false
	}
	/* {
		$inc: {age:1}
	} */
	).then( ( err,res) =>{
		if(err)
			console.log("Error:",err);
		else
			console.log(res)
	});
	
	
	db.close();
});

