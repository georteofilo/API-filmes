const fs = require('fs/promises');

const leituraArquivo = async () => {
    const filmes = await fs.readFile('./src/data/filmes.json');
    return (JSON.parse(filmes));
}

