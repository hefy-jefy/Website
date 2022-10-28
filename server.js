const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// this tells the app where to find the images
app.use(express.static(path.join(__dirname, 'images')))

// when the user requests the root path of the website ('/')
// send back the index.html file
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });
  
app.listen(port);
console.log('Server started at http://localhost:' + port);