const express = require('express');
const rotas = express();
const filmes = require('./controller/filmes');

const conferirAutentificacao = require('./middleware/autentificacao');

const { verificarCampos } = require('./middleware/verificacao');

rotas.get("/filmes", filmes.listarFilmes);
rotas.get("/filmes/:idOuTitulo", filmes.obterFilme);

rotas.post('/filmes', conferirAutentificacao, verificarCampos, filmes.cadastrarFilme);

rotas.put('/filmes/:id', conferirAutentificacao, verificarCampos, filmes.alterarFilme)

module.exports = rotas;