const verificarCampos = (req, res, next) => {
    const { titulo, ano, genero, duracao, diretor, roteiro,  elenco, imagem, trailer, sinopse } = req.body;

    console.log(titulo, ano, genero, duracao, diretor, roteiro,  elenco, imagem, trailer, sinopse)

    if(!titulo || !ano || !genero || !duracao || !diretor || !roteiro || !elenco || !imagem || !trailer || !sinopse){
        return res
            .status(400)
            .json({ mensagem: "Todos os campos são obrigatórios para o cadastro."});
    }
    next();
}

const verificarId = (req, res, next) => {
    const { id } = req.params;

    if(!Number(id)){
        return res
            .status(400)
            .json({ mensagem: "Id inválido"});
    }
    next()
}

const verificarUmCampo = (req, res, next) => {
    const { titulo, ano, genero, duracao, diretor, roteiro,  elenco, imagem, trailer, sinopse } = req.body;

    if(!titulo && !ano && !genero && !duracao && !diretor && !roteiro && !elenco && !imagem && !trailer && !sinopse){
        return res
            .status(400)
            .json({ mensagem: "Pelo menos um campo é necessário para atualizar."});
    }
    next();
}

module.exports = {
    verificarCampos,
    verificarId,
    verificarUmCampo
}