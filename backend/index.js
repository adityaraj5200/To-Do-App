const express = require("express");
const mongoose = require("mongoose"); // Mongoose module provides several functions in order to manipulate the documents of the collection of the MongoDB database
const cors = require("cors");

const route = require('./routes/ToDoRoute.js');

// if (process.env.NODE_ENV === 'development') {
//   require('dotenv').config();
// }
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();
const PORT = process.env.PORT | 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Mongodb Connected..."))
  .catch((err) => console.error(err));

// Routes
app.use(route);
 
app.listen(PORT, () => console.log("Server running on port " + PORT));