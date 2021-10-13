const mongoose = require('mongoose');

// Posts Schema
const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add title'],
        maxlength: [50, 'Name can\'t exceed 50 characters']
    },
    content: {
        type: String,
        required: false
    },
    thumbnail: {
        type: String,
        default: 'no-thumbnail.jpg'
    },
    slug: {
        type: String,
        unique: true,
    }
});

module.exports = mongoose.model('Post', PostSchema);