const express = require('express');
const router = express.Router();
const APIT = require('../controllers/events_api');
const multer = require('multer');

// multer middleware
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname+"_"+Date.now()+"_"+file.originalname)
    }
})

let upload = multer({
    storage: storage,
}).single("image")

router.get('/', APIT.fetchAllEvents)
router.get('/:id', APIT.fetchEventByID)
router.post('/', upload, APIT.createEvent)
router.delete('/:id', APIT.deleteEvent)
module.exports = router;