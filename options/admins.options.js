const adminOptions = () => {}

adminOptions.insertAdmins = {
    sql: 'INSERT INTO admins SET ?'
}

adminOptions.loginAdmins = {
    sql: 'SELECT * FROM admins WHERE email = ?'
}

module.exports = adminOptions
