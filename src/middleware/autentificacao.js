const conferirAutentificacao = (req, res, next) => {
    const { usuario, senha } = req.query;

    if(!usuario && !senha){
        return res
            .status(400)
            .json({ mensagem: "Usuário e senha são obrigatórios."})
    } else if(usuario === 'admin' && senha === 'admin@123'){
        return res
            .status(403)
            .json({ mensagem: "Usuário e senha inválidos ou usuário não tem autorização."})
    }
    next()
}

module.exports = conferirAutentificacao;