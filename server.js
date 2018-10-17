const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./database/index.js')

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname + "/public/")))

app.get('/images', (req, res) => {
  db.homePage.findAll({})
.then(data => {
  res.send(data);
})
.catch(error => {
  res.send(error);
})
})

app.listen(port, () => console.log(`Listening on port ${port}`));