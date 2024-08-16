const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://ramirezmoralesr:Fullstack2024@cluster0.nxjjfsf.mongodb.net/Final_3";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB database connection established successfully"))
  .catch(err => console.error("MongoDB connection error:", err));

// Import routes
const bookRouter = require('./routes/books');

// Adding /books to before all routes
app.use('/books', bookRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
