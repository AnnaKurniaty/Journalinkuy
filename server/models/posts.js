const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    journal_title: String,
    content: String,
    image: String,
    created: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('posts', postSchema);