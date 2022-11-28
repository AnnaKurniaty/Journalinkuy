const event = require('../models/events');
const fs = require('fs');

module.exports = class APIE {
    // fetch all events
    static async fetchAllEvents(req, res) {
        try {
            const events = await event.find();
            res.status(200).json(events);
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    }

    static async fetchEventByID(req, res) {
        const id = req.params.id;
        try {
            const event = await event.findById(id);
            res.status(200).json(event);
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    }

    static async fetchEventByDate(req, res) {
        const created = req.params.created;
        var date = new Date(created);
        console.log()
        try {
            const event = await event.find({
                created: {
                    $gte: date.toISOString(), 
                    $lt: new Date(date.setDate(date.getDate() + 1)).toISOString()
                }
            });
            console.log(event)
            res.status(200).json(event);
        } catch (error) {
            console.log(error)
            res.status(400).json({ message: error.message })
        }
    }

    static async createEvent(req, res) {
        const event = req.body;
        // const imagename = req.file.filename;
        // event.image = imagename;
        try {
            await event.create(event)
            res.status(201).json({ message: "Event created successfully!" })
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

    static async updateEvent(req, res) {
        const id = req.params.id;
        const newEvent = req.body;

        try {
            await Post.findByIdAndUpdate(id, newEvent);
            res.status(200).json({ message: "Event updated successfully!" })
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    }

    static async deleteEvent(req, res) {
        const id = req.params.id;
        try {
            const result = await event.findByIdAndDelete(id);
            if (result.image != '') {
                try {
                    fs.unlinkSync('./uploads/'+result.image);
                } catch (error) {
                    console.log(error)
                }
            }
            res.status(200).json({ message: "event delete successfully" })
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    }
}