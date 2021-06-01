const express = require("express");
const router = express.Router();
//const homeController = require('../controllers/home_controller');

console.log("router loaded");

//route for home page
//router.get('/',homeController.home);
//route user
// router.use('/users',require('./users'));
//route for todo
//router.use('/todo',require('./todo'));

router.use("/api", require("./api"));

router.get("/ping", (req, res) => {
  return res.status(200).json({
    msg: "Pong !!! You are currently pingging todo backend api hosted on heroku from github repo: https://github.com/github-rupanshu/todo-backend.git",
  });
});

module.exports = router;
