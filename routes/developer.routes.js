module.exports = app => {
    const devController = require('../controllers/developers.controller.js')

    app.post('/developers/insert', devController.insertDev)

    app.get('/developers/getDev/:id', devController.getDev)

    app.get('/developers/getAllDevs', devController.getAllDev)

    app.post('/developers/updateDev/:id', devController.updateDev)

    app.post('/developers/loginDev', devController.loginDev)
}