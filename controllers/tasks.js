const Tasks = require('../models/tasks');

exports.all = (req, res) => {
    Tasks.all((err, docs) => {
        if (err) {
            console.log(err);
            return res.status(500);
        }

        res.send(docs);
    })
}

exports.findById = (req, res) => {
    Tasks.findById(req.params.id, (err, doc) => {
        if (err) {
            console.log(err);
            return res.status(500);
        }

        res.send(doc);
    })
}

exports.create = (req, res) => {
    const task = {
        name: req.body.name,
    };

    Tasks.create(task, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500);
        }

        res.send(task);
    })
}

exports.update = (req, res) => {
    Tasks.update(req.params.id, { name: req.body.name }, (err, result) => {
        if (err) {
            console.log(err);
            return res.send(500);
        }
        res.send(200);
    })
}

exports.delete = (req, res) => {
    Tasks.delete(req.params.id, (err, result) => {
        if (err) {
            console.log(err);
            return res.send(500);
        }
        res.send(200);
    })
}