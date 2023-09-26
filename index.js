const express = require('express');
const app = express();

const homeRoutes = require('./routes/rotasHome'); 
const admRoutes = require('./routes/rotasAdm'); 
const loginRoutes = require('./routes/rotasLogin');
const resultadoRoutes = require('./routes/rotasResultado');
const cadastroRoutes = require('./routes/rotasCadastro');
const novosartigoRoutes = require('./routes/rotasNovoArtigo');
const artigoRoutes = require('./routes/rotasArtigos');

app.use('/home', express.static('home.html'));
app.use('/public', express.static('public')); 

app.use(express.static('middwares'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/home.html');
});


app.use('/', homeRoutes);
app.use('/adm', admRoutes);
app.use('/login', loginRoutes );
app.use('/resultados', resultadoRoutes);
app.use('/cadastro', cadastroRoutes);
app.use('/novoartigo', novosartigoRoutes);
app.use('/artigo', artigoRoutes);

app.listen(3000, function() {
    console.log("http://localhost:3000");
    console.log('Aplicação escutando na porta 3000!');
});
