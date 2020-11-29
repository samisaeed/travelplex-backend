const mongoose = require('mongoose');
const uuid = require('uuid');

const categoriesSchema = new mongoose.Schema({
  _id: {type: String, default: uuid.v4},
  // Categoris Info
  cat_name: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now
  },
  createdBy: String,
  updatedAt: {
    type: Date,
    default: Date.now
  },
  updatedBy: String,
  rolesAllowedToRead: [String],
  rolesAllowedToUpdate: [String]
});

module.exports =  categoriesSchema ;
