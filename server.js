var express = require('express');
var server = express();
var routes = require('./routes/routes');
var mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/wt2_db')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

server.use(express.json());
server.use(routes);
server.use(cors());

server.listen(8000, function check(error)
{
    if (error) {
        console.log(error);
    }
    else {
        console.log('started on port 8000');
    }
});
