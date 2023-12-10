const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const db = mongojs('danilovadb', ['accounts']);

router.get('/', (req, res) => {
    db.accounts.find((err, data) => {
        res.render('index', {data: data});
    });
});
router.get('/add', (req, res) => {
    res.render('add-view');
});

router.get('/edit', (req, res) => {
    db.accounts.find((err, data) => {
        res.render('edit-view', {data: data});
    });
});

router.get('/edit_acc/:id', (req, res) => {
    let id = req.params.id;
    db.accounts.findOne({_id: db.ObjectId(id)}, (err, data) => {
        res.render('edit-form-view', {data: data});
    });
});
module.exports = router;
