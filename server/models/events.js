const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    event_title: String,
    created: Date,
});

module.exports = mongoose.model('events', postSchema);