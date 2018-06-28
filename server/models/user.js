var mongoose = require('mongoose');

var user = mongoose.model('User',{
	email:{
		type:String,
		required:true,
		trim:true,
		minLength:1
	}
});

var userObj= new user({
	email:" ishant.arora@trantorinc.com "
});

userObj.save().then(( res) =>{
	console.log("User Saved");
}, (e) =>{
	console.log("Unable to save user",e);
});

module.exports= {user};