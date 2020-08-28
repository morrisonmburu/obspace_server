const devModel = require("../models/developers.model")
const bcrypt = require('bcrypt')
const Str = require('@supercharge/strings')
const Extra = require("./extraItems.controller")

exports.insertDev = (req, res) => {

    const saltRounds = 10

    const password = bcrypt.hashSync(req.body.password, saltRounds);

    const string1 = Str.random(15)
    const dev_id = 'OBD_' + string1.toUpperCase()

    const skills = JSON.stringify(req.body.skills)

    const data = {
        username: req.body.username,
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        email: req.body.email,
        password,
        phone: req.body.phone,
        skills,
        dev_id,
        created_at: Extra.createdTime()
    }

    devModel.insertDev(data, (data, err) => {
        if (err) {
            res.status(500).send({
                message:
                err.message || "Some error occurred while inserting developer."
            })
        } else {
            res.status(200).send({
                data
            })
        }
    })
}

exports.getDev = (req, res) => {
    const id = req.params.id
    devModel.getDev(id, (data, err) => {
        if (err) {
            res.status(500).send({
                message:
                err.message || "Some error occurred while getting developer."
            })
        } else {
            res.status(200).send({
                data
            })
        }
    })
}

exports.getAllDev = (req, res) => {
    devModel.getAllDev((data, err) => {
        if (err) {
            res.status(500).send({
                message:
                err.message || "Some error occurred while getting developers."
            })
        } else {
            res.status(200).send({
                data
            })
        }
    })
}

exports.updateDev = (req, res) => {

    const skills = JSON.stringify(req.body.skills)

    const data = {
        username: req.body.username,
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        email: req.body.email,
        phone: req.body.phone,
        skills,
        updated_at: Extra.createdTime()
    }

    const id = req.params.id

    devModel.updateDev(data, id, (data, err) => {
        if (err) {
            res.status(500).send({
                message:
                err.message || "Some error occurred while updating developer."
            })
        } else {
            res.status(200).send({
                data
            })
        }
    })
}

exports.loginDev = (req, res) => {
    const email = req.body.email
    const password = req.body.password

    devModel.loginDev(email, (data, err) => {
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
                        message = 'Your credentials are correct, Welcome to Obspace Developers';
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
