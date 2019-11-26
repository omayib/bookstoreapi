
const dotenv = require('dotenv');
dotenv.config();

let express = require('express')
let apiRoutesV1 = require('./routes')
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let db = require('../config/mongodb');


let app = express();
var port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/api/v1', apiRoutesV1)

app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});