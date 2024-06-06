const db = require('../model')
const User = db.users

exports.findAll = async () => {
    try {
        const users = await User.findAll({
            attributes: ['id', 'username', 'email']
        })
        return users
    } catch(e) {
        throw Error('Ocorreu um erro ao buscar os usuários.' + e.message)
    }
}

exports.findById = async (id) => {
    try {
        const users = await User.findByPk({
            attributes: ['id', 'username', 'email']
        })
        return users
    } catch(e) {
        throw Error('Ocorreu um erro ao buscar o usuário.' + e.message)
    }
}

exports.create = async (username, email, password) => {
    try {
        const users = await User.create({
            username: username, email: email, password: password
        })
        return users
    } catch(e) {
        throw Error('Ocorreu um erro ao criar o usuário.' + username + '! ' + e.message)
    }
}

exports.update = async (id, username, email, password) => {
    try {
        const users = await User.update(
            { username: username, email: email, password: password },
            {where: {id: id}}
        )
        return users
    } catch(e) {
        throw Error('Ocorreu um erro ao alterar o usuário.' + username + '! ' + e.message)
    }
}

exports.delete = async (id) => {
    try {
        await User.destroy(
            {  where: {id: id} }
        )
    } catch(e) {
        throw Error('Ocorreu um erro ao deletar o usuário.' + e.message)
    }
}
