const fs = require('fs/promises');

const lerArquivo = async () => {
    try {
        const filmes = await fs.readFile('./src/data/filmes.json');
        return (JSON.parse(filmes));
    }catch(erro){
        return ({ ERRO: `${erro.message}`})
    }
}

const escreverArquivo = async (filmes) => {
    try {
        filmes.sort((a,b) => {
            return a.id - b.id;
        })
        await fs.writeFile('./src/data/filmes.json', JSON.stringify(filmes));
        return;
    }catch(erro){
        return ({ ERRO: `${erro.message}`})
    }
}

const listarFilmes = async (req, res) => {
    try {
        const filmes = await lerArquivo();
        return res
            .status(200)
            .json(filmes)
    }catch(erro){
        return res
            .status(500)
            .json({ mensagem: `Erro no servidor: ${erro.message}` });
    }
}

const cadastrarFilme = async (req, res) => {
    const { titulo, ano, genero, duracao, diretor, roteiro,  elenco, imagem, trailer, sinopse } = req.body;

    try{
        let filmes = await lerArquivo();
        let filme = await filmes.find((filme) => {
            return filme.titulo === titulo;
        })
        if(filme){
            return res
                .status(400)
                .json({ mensagem: `Já existe um filme chamado ${titulo}` })
        }
        const id = filmes[filmes.length - 1].id + 1;

        filme = {
            id,
            titulo,
            ano,
            genero,
            duracao,
            diretor,
            roteiro,
            elenco,
            imagem,
            trailer,
            sinopse
        }

        await filmes.push(filme);
        await escreverArquivo(filmes);

        return res
            .status(204)
            .json()
    }catch(erro){
        return res
            .status(500)
            .json({ mensagem: `Erro no servidor: ${erro.message}` });
    }
} 

module.exports = {
    listarFilmes,
    cadastrarFilme
}