const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const session = require('express-session');

app.use(session({
    secret: 'Keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
}));

const server = require('http').Server(app);

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: "Welcome To Rest Api." });
});

require('./routes/user.routes.js')(app);

server.listen(port, () => {
    console.log(`Server is running on ${port}.`);
});