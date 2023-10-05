const fs = require('fs/promises');

const lerArquivo = async () => {
    try {
        const filmes = await fs.readFile('./src/data/filmes.json');
        return (JSON.parse(filmes));
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



module.exports = {
    listarFilmes
}