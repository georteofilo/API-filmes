const express = require('express');
const rotas = express();
const filmes = require('./controller/filmes')

rotas.get("/filmes", filmes.listarFilmes);

module.exports = rotas;