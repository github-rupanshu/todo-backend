const Todo = require('../../../models/todo');
const User = require('../../../models/user');


module.exports.createTodo = async (req, res) => {
    try {

        const todo = await Todo.create({
            userId: req.user._id,
            desc: req.body.desc,
            category: req.body.category,
            dueDate: req.body.dueDate,
            sts: 'pending'
        });
        const user = await User.findOne(req.user._id);

        user.todos.push(todo._id);
        await user.save();

        return res.status(200).json({
            data: {
                post: todo,
                user: user
            },
            msg: "Todo created!"
        });


    } catch (error) {
        return res.status(500).send(error);
    }
};

module.exports.getTodo = async (req, res) => {
    try {
        //const todos = await Todo.find(User.findOne(req.user._id).todos);
        const user = await User.findOne(req.user._id)
            .populate("todos");
        return res.status(200).json({
            msg: "Fetched All Todos",
            todos: user.todos
        });
    } catch (err) {
        console.log("error in getting todos", err);

        return res.status(500).send(err);
    }
};

module.exports.destroy = async (req, res) => {
    try {

        let todo = await Todo.findById(req.params.id);
        let userid = todo.userId

        if (req.user.id == todo.userId) {

            let user = await User.findByIdAndUpdate(userid, {
                $pull: {
                    todos: req.params.id
                }
            }, {
                useFindAndModify: true
            }, (err, doc) => {});
            todo.remove();
            await user.save();

        }
        return res.status(200).json({
            msg: "todo deleted",
            todo: todo
        });

    } catch (err) {
        console.log('errr in deleting todo');
        return res.status(500).send(err);
    }
};

module.exports.updateTodo = async (req, res) => {
    try {
        const {
            desc,
            dueDate
        } = req.body || {};
        let todo = await Todo.findByIdAndUpdate(req.params.id, {
            desc: desc,
            dueDate:dueDate
        }, {
            useFindAndModify: true
        }, (err, doc) => {});
        await todo.save();
        return res.status(200).json({
            msg: "todo updated",
            todo: todo
        });
    } catch (err) {
        console.log('error in updating todo');
        return res.status(500).send(err);
    }
};