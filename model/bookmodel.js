const mongoose = require("mongoose");

// define Schema Class
const Schema = mongoose.Schema;

// Create a Schema object
const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String },
});

// This creates the collection.  300381941-Ricardo
const Bookmodel = mongoose.model("300381941-RicardoRamirez", bookSchema);
module.exports = Bookmodel;