var mongoose = require('mongoose');
var db      = mongoose.connection;
db.on('error', console.error.bind(console, 'connection db error:'));
db.once('open', function() {
  console.log("connected to db")
});

mongoose.connect(process.env.mongodburi, { useNewUrlParser: true});