const fs = require('fs/promises');

const leituraArquivo = async () => {
    try {
        const filmes = await fs.readFile('./src/data/filmes.json');
        return (JSON.parse(filmes));
    }catch(erro){
        return ({ ERRO: `${erro.message}`})
    }
}

