const { Cliente, Abogado } = require('../../db_conn')

const getLogin = async (password, email)=>{
    const login = await Cliente.findOne({
        where:{
            correo: email,
            password: password
        }
    })
    if(!login){
        const login = await Abogado.findOne({
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