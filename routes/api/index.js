// Dependencies
const router = require('express').Router();
const wordRoutes = require('./words');
const path = require('path');

// Word Routes
router.use('/words', wordRoutes);

// Anything else render the html page
router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'))
});

module.exports = router;