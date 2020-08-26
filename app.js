const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const server = require('http').Server(app);

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: "Welcome To Rest Api." });
});

server.listen(port, () => {
    console.log(`Server is running on ${port}.`);
});