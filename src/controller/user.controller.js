const userService = require('../service/user.service')

exports.findAll = async (request, response) => {
    try {
        const users = await userService.findAll()
        return response.status(200)
            .json({
                status: 200,
                data: users,
                message: 'Usuário listados com sucesso'
            })
    } catch(e) {
        response
            .send(400)
            .json({
                status: 400,
                message: e
            })
    }
}

exports.findById = async (request, response) => {
    try {
        const id = parseInt(request.params.id)
        const user = await userService.findById(id)
        return response
            .status(200)
            .json({
                status: 200,
                data: user,
                message: 'Usuário listado com sucesso'
            })
    } catch(e) {
        response
            .send(400)
            .json({
                status: 400,
                message: e
            })
    }
}

exports.create = async (request, response) => {
    try {
        const { username, email, password } = request.body
        const user = await userService.create(username, email, password)
        return response
            .status(201)
            .json({
                status: 201,
                body: {
                    user:user
                }
            })
    } catch(e) {
        response
            .send(400)
            .json({
                status: 400,
                message: e
            })
    }
}

exports.update = async (request, response) => {
    try {
        const id = parseInt(request.params.id)
        const { username, email, password } = request.body
        const user = await userService.update(id, username, email, password)
        return response
            .status(200)
            .json({
                status: 200,
                body: {
                    user:user
                }
            })
    } catch(e) {
        response
            .send(400)
            .json({
                status: 400,
                message: e
            })
    }
}

exports.delete = async (request, response) => {
    try {
        const id = parseInt(request.params.id)
        await userService.delete(id)
        return response
            .status(200)
            .send({ message: "Usuário deletado" }
        )

    } catch(e) {
        response
        .send(400)
        .json({
            status: 400,
            message: e
        })
    }
}
