const mongoose = require('mongoose');

const timelineSchema = mongoose.Schema({
    story: String,
    created: String,
});

module.exports = mongoose.model('timelines', timelineSchema);