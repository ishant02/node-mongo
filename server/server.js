var express= require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose'); // mongoose import
var {Todo} = require('./models/todo');
var {Post} = require('./models/post');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());// app.use for middle layer

//Configuring Routes
// POST Routes
// For create, use POST http method
// '/todos' => for creating new todo
app.post('/todos', (req, res) => {
	//console.log(req.body); // body gets stored by bodyParser
	var todo = new Todo({
		//text:"This is from postman"
		text:req.body.text
	});
	
	todo.save().then((doc) => {
		res.send(doc);
	}, (e) =>{
		res.status(400).send(e);
	});
});


app.post('/posts',(req, res)=>{	
	var post = new Post({
		text:req.body.text,
		desc:req.body.desc
	});
	
	post.save().then((doc) => {
		res.send(doc);
	}, (e)=> {
		res.status(400).send(e);
	});
});







app.listen(3000, () =>{
	console.log("Started on port 3000");
});
