const express = require('express');
const app = express();

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

const server = require('http').Server(app);
server.listen(8080, () => console.log("Server is starting..."));