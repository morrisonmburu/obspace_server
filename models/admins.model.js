const sql = require('./db.js')
const adminOptions = require('../options/admins.options.js')
const adminsModel = () => {}

adminsModel.insertAdmin = (data, result) => {
    sql.query(adminOptions.insertAdmins, [data], (errors, results) => {
        if (errors) {
            console.log('errors: ', errors)
            result(null, errors)
            return
        } else {
            result(results)
        }
    })
}

adminsModel.loginAdmin = (email, result) => {
    sql.query(adminOptions.loginAdmins, [email], (errors, results) => {
        if (errors) {
            console.log('errors: ', errors)
            result(null, errors)
            return
        } else {
            result(results)
        }
    })
}

module.exports = adminsModel