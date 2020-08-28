const sql = require('./db.js')
const devOptions = require('../options/developers.options.js')
const { error } = require('jquery')
const devModel = () => {}

devModel.insertDev = (data, result) => {
    sql.query(devOptions.insertDev, [data], (errors, results) => {
        if (errors) {
            console.log('errors: ', errors)
            result(null, errors)
            return
        } else {
            result(results)
        }
    })
}

devModel.getDev = (id, result) => {
    sql.query(devOptions.getDev, [id], (errors, results) => {
        if (errors) {
            console.log('errors: ', errors)
            result(null, errors)
            return
        } else {
            result(results)
        }
    })
}

devModel.getAllDev = result => {
    sql.query(devOptions.getAllDev, (errors, results) => {
        if (errors) {
            console.log('errors: ', errors)
            result(null, errors)
            return
        } else {
            result(results)
        }
    })
}

devModel.updateDev = (data, id, result) => {
    sql.query(devOptions.updateDev, [data, id], (errors, results) => {
        if (errors) {
            console.log('errors: ', errors)
            result(null, errors)
            return
        } else {
            result(results)
        }
    })
}

devModel.loginDev = (email, result) => {
    sql.query(devOptions.loginDev, [email], (errors, results) => {
        if (errors) {
            console.log('errors: ', errors)
            result(null, errors)
            return
        } else {
            result(results)
        }
    })
}

module.exports = devModel
