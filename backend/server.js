const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// have our environment variables in the dotenv file
require('dotenv').config();

// creates our express server
const app = express();
const port = process.env.PORT || 5000;

// cors middleware will allow us to parse json
app.use(cors());
app.use(express.json());

// database uri, uri references where the database is installed
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

// Connect to the database
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const homeRouter = require('./routes/home');
const usersRouter = require('./routes/users');

app.use('/home', homeRouter);
app.use('/users', usersRouter);

// Will listen on port 5000
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});