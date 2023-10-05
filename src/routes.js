const express = require('express');
const rotas = express();
const filmes = require('./controller/filmes');

const conferirAutentificacao = require('./middleware/autentificacao');

const { verificarCampos, verificarId, verificarUmCampo } = require('./middleware/verificacao');

rotas.get("/filmes", filmes.listarFilmes);
rotas.get("/filmes/:idOuTitulo", filmes.obterFilme);

rotas.post('/filmes', conferirAutentificacao, verificarCampos, filmes.cadastrarFilme);

rotas.put('/filmes/:id', conferirAutentificacao, verificarCampos, filmes.alterarFilme);

rotas.patch('/filmes/:id', conferirAutentificacao, verificarId, verificarUmCampo, filmes.atualizarFilme);

module.exports = rotas;