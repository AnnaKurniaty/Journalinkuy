const Timeline = require('../models/timelines');
const fs = require('fs');

module.exports = class APIT {
    // fetch all timelines
    static async fetchAllTimelines(req, res) {
        try {
            const timelines = await Timeline.find();
            res.status(200).json(timelines);
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    }

    static async fetchTimelineByID(req, res) {
        const id = req.params.id;
        try {
            const timeline = await Timeline.findById(id);
            res.status(200).json(timeline);
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    }

    static async createTimeline(req, res) {
        const timeline = req.body;
        try {
            await Timeline.create(timeline)
            res.status(201).json({ message: "Timeline created successfully!" })
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

    static async deleteTimeline(req, res) {
        const id = req.params.id;
        try {
            const result = await Timeline.findByIdAndDelete(id);
            if (result.image != '') {
                try {
                    fs.unlinkSync('./uploads/'+result.image);
                } catch (error) {
                    console.log(error)
                }
            }
            res.status(200).json({ message: "Timeline delete successfully" })
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    }
}