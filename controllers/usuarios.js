const {
    response,
    request
} = require('express');

const usuariosGet = (req = request, res = response) => {
    const {nombre="no name",idKey="no key"} = req.query;
    res.status(200).json({
        ok: true,
        msg: "get API - controlador",
        nombre,
        idKey
    })
}

const usuariosPut = (req, res = response) => {
    const id = req.params.id;
    res.status(400).json({
        ok: true,
        msg: "put API - controlador",
        id: id
    })
}

const usuariosPost = (req, res = response) => {
    const {
        nombre,
        edad
    } = req.body;

    res.status(201).json({
        ok: true,
        msg: "post API controlador",
        body: nombre
    })
}

const usuariosDelete = (req, res = response) => {
    res.status(200).json({
        ok: true,
        msg: "delete API controlador"
    })
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
};