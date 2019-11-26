var mongoose = require('mongoose');
// Setup schema
var bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    cover: String,
    year: String,
    is_archived:{
        type: Boolean,
        default: false
    }
},
{timestamps : 
    { createdAt: 'created_at', 
    updatedAt:'updated_at' 
}});
// Export Contact model
mongoose.model('book', bookSchema);
module.exports = mongoose.model('book')
// module.exports.get = function (callback, limit) {
//     Book.find(callback).limit(limit);
// }