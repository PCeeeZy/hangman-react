// Dependencies
const db = require('../models');
const axios = require('axios');
const cheerio = require('cheerio');
const mongoose = require('mongoose');

module.exports = {
    findAll: (req, res) => {
        console.log('findAll hit');
        axios.get("https://www.dictionary.com/").then((response) => {
            // Load the html body from axios into cheerio
            console.log('axios promise fullfilled');
            var $ = cheerio.load(response.data);

            let scrapedArray = [];
            // For each element with a "title" class
            $("span.trending-words-word").each(function (i, element) {
                // Save the text and href of each link enclosed in the current element
                let word = $(element).text();
                let link = `https://www.dictionary.com/browse/${word}`;
                // Insert the data in the scrapedData db
                // db.Word.create({
                //     word,
                //     link
                // })
                // .then(inserted => {
                //     console.log('db inserted');
                //     console.log(inserted);
                //     res.json(inserted);
                // })
                // .catch(err => res.status(422).json(err));
                let newWord = {
                    word,
                    link
                };

                scrapedArray.push(newWord);

            })
            response.json(scrapedArray);
        })
    },

    // findById: (req, res) => {
    //     db.Word.findById(req.params.id)
    //         .then(dbWord => res.json(dbWord))
    //         .catch(err => res.status(422).json(err));
    // }
};