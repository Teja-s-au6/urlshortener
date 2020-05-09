var mongoose = require('mongoose');

// mongoose
// 	.connect('mongodb://127.0.0.1:27017/shorturl', {
// 		useCreateIndex: true,
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true
// 	})
// 	.then(function() {
// 		console.log('Database Connect Successfully');
// 	})
// 	.catch(function(err) {
// 		console.log(err.message);
// 	});

var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI.replace("<password>", process.env.MONGODB_PASSWORD),
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(function () {
        console.log('Database Connected Successfully');
    }).catch(function (err) {
        console.log(err.message);
    });
