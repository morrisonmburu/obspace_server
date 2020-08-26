const sql = require('./db.js')
const userOptions = require('../options/user.options.js')

const userModel = (userModel) => {}

userModel.getUsers = (result) => {
    sql.query(userOptions.fetchAllUsers, (errors, results) => {
        if (errors) {
            console.log("errors: ", errors)
            result(null, errors)
            return
        } else {
            return result(results)
        }
    })
}

userModel.insertUser = (data, result) => {
    sql.query(userOptions.insertUser, [data], (errors, results) => {
        if (errors) {
            console.log("errors: ", errors)
            result(null, errors)
            return
        } else {
            return result(results)
        }
    })
}

userModel.fetchAuthUser = (email, result) => {
    sql.query(userOptions.getAuthUser, [email], (errors, results) => {
        if (errors) {
            console.log("errors: ", errors)
            result(null, errors)
            return
        } else {
            return result(results)
        }
    })
}

userModel.getUser = (id, result) => {
    sql.query(userOptions.getUser, [id], (errors, results) => {
        if (errors) {
            console.log("errors: ", errors)
            result(null, errors)
            return
        } else {
            return result(results)
        }
    })
}

module.exports = userModel