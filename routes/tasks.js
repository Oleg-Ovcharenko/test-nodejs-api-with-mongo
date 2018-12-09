const ObjectID = require('mongodb').ObjectID;
const tasksController = require('../controllers/tasks');

module.exports = (app) => {
    app.get('/tasks', tasksController.all);
    app.post('/tasks', tasksController.create);
    app.put('/tasks/:id', tasksController.update);
    app.get('/tasks/:id', tasksController.findById);
    app.delete('/tasks/:id', tasksController.delete);
};