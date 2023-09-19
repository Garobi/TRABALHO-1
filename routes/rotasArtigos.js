const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/:nomeDoArtigo', function(req, res) {
    const nomeDoArtigo = req.params.nomeDoArtigo;
    const caminhoDoArtigo = path.join(__dirname, '..', 'public', 'pages', 'categorias', nomeDoArtigo + '.html');


    res.sendFile(caminhoDoArtigo, function(err) {
        if (err) {
            res.status(404).send('Artigo não encontrado.');
        }
    });
});

module.exports = router;
