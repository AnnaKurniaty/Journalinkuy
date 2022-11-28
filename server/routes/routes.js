const express = require('express');
const router = express.Router();
const API = require('../controllers/api');
const APIE = require('../controllers/events_api');
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

router.get('/', API.fetchAllPost)
router.get('/:id', API.fetchPostByID)
router.get('/date/:created', API.fetchPostByDate)
router.post('/', upload, API.createPost)
router.patch('/:id', upload, API.updatePost)
router.delete('/:id', API.deletePost)
router.get('/calendar/', APIE.fetchAllEvents)
router.get('/:id', APIE.fetchEventByID)
router.get('/date/:created', APIE.fetchEventByDate)
router.post('/calendar/', upload, APIE.createEvent)
router.delete('/calendar/:id', APIE.deleteEvent)
module.exports = router;