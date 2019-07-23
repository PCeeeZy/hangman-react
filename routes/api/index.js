// Dependencies
const router = require('express').Router();
const wordRoutes = require('./words');
const scrapeRoutes = require('./scrape');
const path = require('path');


// Word Routes
router.use('/words', wordRoutes);
router.use('/scrape', scrapeRoutes);

// Anything else render the html page
router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'))
});

module.exports = router;