const express = require('express');
const router = express.Router();

router.use('/', require('./pages'));
router.use('/delete_acc', require('./delete_acc'));
router.use('/save', require('./save_acc'));
router.use('/edit_acc_db', require('./edit_acc'));

module.exports = router;
