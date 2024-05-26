const { Cliente, Abogado, Usuario } = require('../../DB')

const getLogin = async (password, email)=>{
    const login = await Usuario.findOne({
        where:{
            correo: email,
            password: password
        }
    })
    if(!login){
        const login = await Cliente.findOne({
            where:{
                correo: email,
                password: password
            }
        })
        if(!login) throw new Error('Password o email inválido')
        return{
            access: true,
            usuario: login
        }
    }
    return {
        access: true,
        usuario: login
    }
}

module.exports = {
    getLogin
}