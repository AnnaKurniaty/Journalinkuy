const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    category: String,
    journal_title: String,
    content: String,
    image: String,
    created: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Post', postSchema);