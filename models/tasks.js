const ObjectID = require('mongodb').ObjectID;
var db = require('../db');

exports.all = (cb) => {
    db.get().collection('tasks').find().toArray(function (err, docs) {
        cb(err, docs);
    })
}

exports.findById = (id, cb) => {
    db.get().collection('tasks').findOne({ _id: ObjectID(id) }, function (err, docs) {
        cb(err, docs);
    })
}

exports.create = (task, cb) => {
    db.get().collection('tasks').insert(task, (err, result) => {
        cb(err, result);
    })
}

exports.update = (id, newData, cb) => {
    db.get().collection('tasks').updateOne(
        { _id: ObjectID(id) },
        { $set: { ...newData } },
        (err, result) => {
            cb(err, result);
        }
    )
}

exports.delete = (id, cb) => {
    db.get().collection('tasks').deleteOne(
        { _id: ObjectID(id) },
        (err, result) => {
            cb(err, result);
        }
    )
}