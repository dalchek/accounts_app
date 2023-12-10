const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const db = mongojs('danilovadb', ['accounts']);

router.post('/', (req, res) => {
    let id = req.body.id;
    db.accounts.update(
        {_id: db.ObjectId(id)},
        {
            $set: {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                phone: req.body.phone,
            },
        },
        (err, data) => {
            res.redirect('/');
        }
    );
});

module.exports = router;
