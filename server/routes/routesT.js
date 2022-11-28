const express = require('express');
const router = express.Router();
const APIT = require('../controllers/timelines_api');
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

router.get('/', APIT.fetchAllTimelines)
router.get('/:id', APIT.fetchTimelineByID)
router.post('/', upload, APIT.createTimeline)
router.delete('/:id', APIT.deleteTimeline)
module.exports = router;