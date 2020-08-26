const userOptions = (userOptions) => {}

userOptions.fetchAllUsers = {
    sql: 'SELECT * FROM users'
}

userOptions.insertUser = {
    sql: 'INSERT INTO users SET ?'
}

userOptions.getAuthUser = {
    sql: 'SELECT * FROM users WHERE email = ?'
}

userOptions.getUser = {
    sql: 'SELECT * FROM users WHERE id = ?'
}

module.exports = userOptions