const express = require('express');
const router = express.Router();
const todoController = require('../../../controllers/api/v1/todo_controller');
//const verify = require('../../../middlewares/checkAuth');
const passport = require("passport");

router.post('/create', passport.authenticate("jwt", {
    session: false
}), todoController.createTodo);

router.get('/get', passport.authenticate("jwt", {
    session: false
}), todoController.getTodo);

router.get('/destroy/:id', passport.authenticate("jwt", {
    session: false
}), todoController.destroy);

router.post('/update/:id', passport.authenticate("jwt", {
    session: false
}), todoController.updateTodo);

module.exports = router;