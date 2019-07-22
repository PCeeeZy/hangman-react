// Dependencies
const router = require('express').Router();
const wordController = require('../../controllers/wordController');

// Matches with '/api/words'
router.route('/')
    .get(wordController.findAll);

// Matches with '/api/words/:id'
router.route('/:id')
    .get(wordController.findById);

module.exports = router;