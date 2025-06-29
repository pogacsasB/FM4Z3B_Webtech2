var mongoose = require('mongoose');
const { type } = require('os');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    weight_limit: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('boats', userSchema);