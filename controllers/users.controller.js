const userModel = require("../models/user.model")
const bcrypt = require('bcrypt')
const Str = require('@supercharge/strings')
const Extra = require("./extraItems.controller")

exports.getUsers = (req, res) => {
    userModel.getUsers((data, err) => {
        if (err) {
            res.status(500).send({
                message: 
                err.message || "Some error occurred while retrieving users."
            })
        } else {
            res.status(200).send({
                data
            })
        }
    })
}

exports.insertUser = (req, res) => {

    const saltRounds = 10

    const password = bcrypt.hashSync(req.body.password, saltRounds);

    const string1 = Str.random(15)
    const user_id = 'OBU_' + string1.toUpperCase()
    
    const insertData = {
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        username: req.body.username,
        email: req.body.email,
        password,
        phone: req.body.phone,
        account_type_id: req.body.account_type_id,
        status: req.body.status,
        user_id,
        created_at: Extra.createdTime()
    }

    userModel.insertUser(insertData, (data, err) => {
        if (err) {
            res.status(500).send({
                message:
                err.message || "Some error occurred while inserting user."
            })
        } else {
            res.status(200).send({
                data
            })
        }
    })
}

exports.authenitcateUser = (req, res) => {
    const email = req.body.email
    const password = req.body.password

    userModel.fetchAuthUser(email, (data, err) => {
        if (err) {
            res.status(500).send('Something Went Wrong')
        } else {
            let message = '';
            if (data.length) {
                req.session.userId = data[0].id;
                req.session.user = data[0];
                bcrypt.compare(password, data[0].password, (err, isMatch) => {
                    if (err) {
                        throw err;
                    } else if (!isMatch) {
                        console.log('wrong');
                        message = 'Wrong Credentials. Try Again';
                        res.send({ authorized: false, message });
                    } else {
                        message = 'Your credentials are correct, Welcome to Obspace';
                        req.session.auth = true;
                        res.status(200).send({ authorized: true, message: message, data: req.session.user })
                    }
                });
            }
            else {
                message = 'Wrong Credentials. Try Again';
                res.send({ authorized: false, message })
            }
        }
    })
}

exports.getUser = (req, res) => {
    userModel.getUser(req.params.id, (data, err) => {
        if (err) {
            res.status(500).send({
                message:
                err.message || "Some error occurred while inserting user."
            })
        } else {
            res.status(200).send({
                data
            })
        }
    })
}
