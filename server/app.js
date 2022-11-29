require('dotenv').config();
const express = require('express');
// var multer  = require('multer');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static('uploads'));

// Database connection
mongoose
    .connect('mongodb+srv://journalinKuy:journalinKUY@cluster0.g3aq7y0.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true,
    })
    .then(() => console.log("Connected to the databases!"))
    .catch((err) => console.log(err))

// routes prefix
app.use("/api/post", require('./routes/routes'))
app.use("/api/timelines", require('./routes/routesT'))
app.use("/api/events", require('./routes/routesE'))

// Start server
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));