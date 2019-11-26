var mongoose = require('mongoose');
var db      = mongoose.connection;
db.on('error', console.error.bind(console, 'connection db error:'));
db.once('open', function() {
  console.log("connected to db")
});
mongoose.connect('mongodb+srv://siapa:saya@cluster0-zb4kl.mongodb.net/bookstore?retryWrites=true&w=majority', { useNewUrlParser: true});