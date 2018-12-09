let express = require('express');
let bodyParser = require('body-parser');

let db = require('./db');
let tasksRoutes = require('./routes/tasks');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

db.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log(err);
    }

    tasksRoutes(app, client.db('mytestingdb'));

    app.listen('1995', () => {
        console.log('Please open your browser on localhost:1995');
    })
})