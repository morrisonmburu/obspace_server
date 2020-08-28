const adminsModel = require("../models/admins.model")
const bcrypt = require('bcrypt')
const Extra = require("./extraItems.controller")

exports.insertAdmin = (req, res) => {

    const saltRounds = 10

    const password = bcrypt.hashSync(req.body.password, saltRounds)

    const data = {
        username: req.body.username,
        password,
        email: req.body.email,
        phone: req.body.phone,
        created_at: Extra.createdTime()
    }
    adminsModel.insertAdmin(data, (data, err) => {
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

exports.loginAdmin = (req, res) => {
    const email = req.body.email
    const password = req.body.password

    adminsModel.loginAdmin(email, (data, err) => {
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
                        message = 'Your credentials are correct, Welcome to Obspace Admin';
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
