// Dependencies
const router = require('express').Router();
const wordController = require('../../controllers/wordController');

// Matches with '/api/scrape'
router.route('/')
    .get(wordController.findAll);

module.exports = router;