// Dependencies
const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        db.Word.find(req.query)
            .then(dbWords => res.json(dbWords))
            .catch(err => res.status(422).json(err));
    },
    findById: (req, res) => {
        db.Word.findById(req.params.id)
            .then(dbWord => res.json(dbWord))
            .catch(err => res.status(422).json(err));
    }
};