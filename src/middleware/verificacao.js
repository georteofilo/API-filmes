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

module.exports = {
    verificarCampos,
}