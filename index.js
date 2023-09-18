const express = require('express');
const app = express();

const homeRoutes = require('./routes/rotasHome'); 
const admRoutes = require('./routes/rotasAdm'); 

app.use('/home', express.static('home.html'));
app.use('/public', express.static('public')); 

app.use('/', homeRoutes);
app.use('/adm', admRoutes);

app.listen(3000, function() {
    console.log("http://localhost:3000");
    console.log('Aplicação escutando na porta 3000!');
});



