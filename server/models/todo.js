var mongoose = require('mongoose');

//Save new something
var Todo= mongoose.model('Todo',{
	text:{
		type:String,
		required:true,
		minLength:1,
		trim:true,
	},
	completed:{
		type:Boolean,
		default:false
	},
	completedAt:{
		type: Number,
		default:null
	}
});

/* var newTodo = new Todo({
	text:' Validated Data '
}); */
/* {
		text:"Learning Mongoose",
		completed:true,
		completedAt:6
	} */	
//);

/* newTodo.save().then( (res) =>{
	console.log("Saved Todo");
}, (e) => {
	console.log("Unable to save todo",e);
}); */

module.exports= {Todo};
