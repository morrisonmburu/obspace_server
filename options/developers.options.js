const devOptions = () => {}

devOptions.insertDev = {
    sql: 'INSERT INTO developers SET ?'
}

devOptions.getDev = {
    sql: 'SELECT * FROM developers WHERE id = ?'
}

devOptions.getAllDev = {
    sql: 'SELECT * FROM developers'
}

devOptions.updateDev = {
    sql: 'UPDATE developers SET ? WHERE id = ?'
}

devOptions.loginDev = {
    sql: 'SELECT * FROM developers WHERE email = ?'
}

module.exports = devOptions