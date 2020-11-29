const express = require('express');
const router = express();
const categoriesController = require('../controllers/category-controller');

router.get('', categoriesController.getAll());

router.get('/:id', categoriesController.getById());

router.delete('/:id', categoriesController.deleteOne());

router.post('/create', categoriesController.create());

module.exports = router;
