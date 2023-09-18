const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.sendFile(__dirname + '/../home.html');
});

router.get('/pagedois', function(req, res) {
    res.sendFile(__dirname + '/../adm.html');
});

module.exports = router;
