module.exports = app => {
    const Users = require('../controllers/users.controller.js')

    //retrieve all users
    app.get('/users', Users.getUsers)

    app.post('/insertUser', Users.insertUser)

    app.post('/authenticateUser', Users.authenitcateUser)

    app.get('/getUser/:id', Users.getUser)
};