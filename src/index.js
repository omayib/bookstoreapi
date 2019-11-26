let express = require('express')
let apiRoutesV1 = require('./routes')
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let db = require('../config/mongodb');

// Initialize the app
let app = express();
// Setup server port
var port = process.env.PORT || 8080;
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/api/v1', apiRoutesV1)
// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});