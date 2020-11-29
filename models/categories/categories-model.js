const categoriesSchema = require('./categoris.schema');
const mongoose = require('mongoose');

const Student = mongoose.model('Categories', categoriesSchema);

function create(Categories) {
  return new Student(Categories).save();
}

function getAll() {
  return Student.find();
}

function deleteOne(id) {
  return Student.deleteOne({ _id: id });
}

function getById(id) {
  return Student.findById(id);
}

module.exports = { create, getAll, deleteOne, getById };