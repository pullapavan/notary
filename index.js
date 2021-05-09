const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(process.env.PORT || 5000, () => console.log(`url-shortener listening on port ${port}!`));
