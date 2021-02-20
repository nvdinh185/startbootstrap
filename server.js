const express = require('express');
const app = express();
fs = require('fs');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
  next();
});

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/test-get', function (req, res) {
  res.end(JSON.stringify({ message: 'Hello!' }));
});

app.post('/test-post', function (req, res) {
  console.log(req.body);
  res.end(JSON.stringify({ message: 'OK!' }));
});

app.get('/get-info', function (req, res) {
  let myData = [];
  try {
    myData = fs.readFileSync(__dirname + '/data.txt', 'utf8');
  } catch (err) {
    console.error(err)
  }
  res.end(JSON.stringify(myData));
});

const server = require('http').Server(app);
server.listen(8080, () => console.log("Server is starting..."));