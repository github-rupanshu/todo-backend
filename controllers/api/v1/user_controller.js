const User = require('../../../models/user');
const jwt = require('jsonwebtoken');

module.exports.register = async (req, res) => {
    try {
        const {
            email,
            password,
            name
        } = req.body || {};
        const user = await User.findOne({
            email: email
        });
        if (user) {
            throw new Error(" User Already Registered");
        }
        let newUser = await User.create(req.body);

        return res.status(201).send({
            msg: "User Registered Successfully",
            data: newUser
        });
    } catch (err) {
        res.status(501).send(err);
    }
};

module.exports.getToken = async (req, res) => {
    try {
        const {
            email,
            password,
        } = req.body || {};

        const user = await User.findOne({
            email: email
        });
        if (!user) {
            return res.status(402).send({
                msg: "user not registered"
            });
        }
        if (user.password != password) {
            return res.status(402).send({
                msg: "incorrect userid/password"
            });
        }

        const token = jwt.sign({
            email: user.email,
            name: user.name
        }, "secretKey");

        return res.status(201).send({
            msg: "token generated successfully",
            data: {
                token: token
            }
        });

    } catch (err) {
        console.log("error in creating  User");
        return res.status(500).send(err);
    }
};