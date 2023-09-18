var express = require('express');
var app = express();

app.use('/home', express.static('./pages/home.html'))
app.use('/pagedois', express.static('./pages/paginadois.html'))


app.get('/', function(req, res){ 
    res.redirect('/home');
});

app.get('/pagedois', function(req, res) {
    res.sendFile(__dirname + '/pagedois');
});

app.listen(3000, function () { 
    console.log("http://localhost:3000");
    console.log('Aplicação escutando na porta 3000!'); 
}); 

