const express = require('express');

const router = express.Router();

router.use('/todo', require('./todo'));
router.use('/user', require('./users'));

module.exports = router;