const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const db = mongojs('danilovadb', ['accounts']);

router.get('/:id',(req,res)=>{
    let id = req.params.id
    db.accounts.remove({"_id":db.ObjectId(id)},(err,data) =>{
        res.redirect('/')
    })
})

module.exports = router;
