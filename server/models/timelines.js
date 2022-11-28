const mongoose = require('mongoose');

const timelineSchema = mongoose.Schema({
    story: String,
    created: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('timelines', timelineSchema);