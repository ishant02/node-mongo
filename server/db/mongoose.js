const mongoose = require('mongoose');

mongoose.Promise=  global.Promise;
mongoose.connect('mongodb://localhost:27017/mongoose');


module.exports = { mongoose // as per ES6 rules, if variable name is same , then no need to assign to other object
	//mongoose:mongoose
}