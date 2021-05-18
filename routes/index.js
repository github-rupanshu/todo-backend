const express = require('express');
const router = express.Router();
//const homeController = require('../controllers/home_controller');

console.log('router loaded');

//route for home page
//router.get('/',homeController.home);
//route user
// router.use('/users',require('./users'));
//route for todo
//router.use('/todo',require('./todo'));

router.use('/api', require('./api'));


module.exports = router;