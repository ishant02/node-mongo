var mongoose = require('mongoose');

 var Post = mongoose.model('Post',{
			text:{
				type:String,
				required:true,
				trim:true,
				minLength:4
			},
			desc:{
				type:String,
				required:true,
				trim:true,
				min:20
			}	
 });
 
 module.exports={Post};