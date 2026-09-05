require('dotenv').config({debug: true});
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server is running");
});

//connects to MongoDB
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to MongoDB Atlas!')
        app.listen(PORT, () => {
            console.log("Server running on port, ", `${PORT}`);
        });
    })
    .catch((err) => console.log('MongoDB connection error: ', err));