const express = require('express');
const rotas = express();
const filmes = require('./controller/filmes');

const conferirAutentificacao = require('./middleware/autentificacao');

const { verificarCamposCadastro } = require('./middleware/verificacao');

rotas.get("/filmes", filmes.listarFilmes);
rotas.get("/filmes/:idOuTitulo", filmes.obterFilme);

rotas.post('/filmes', conferirAutentificacao, verificarCamposCadastro, filmes.cadastrarFilme);

module.exports = rotas;