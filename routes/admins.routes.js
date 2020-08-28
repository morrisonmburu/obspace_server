module.exports = app => {
    const adminController = require('../controllers/admins.controller')

    app.post('/admins/insert', adminController.insertAdmin)

    app.post('/admins/login', adminController.loginAdmin)
};