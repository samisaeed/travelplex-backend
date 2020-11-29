const Categories = require('../models/categories/categories-model');
const baseController = require('./base-controllers');

function getAll() {
  return baseController.getAll(Categories);
}

function create() {
  return baseController.create(Categories);
}

function deleteOne() {
  return baseController.deleteOne(Categories);
}

function getById() {
  return baseController.getById(Categories);
}

module.exports = {
  getAll,
  create,
  deleteOne,
  getById
};
