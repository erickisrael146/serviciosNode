import { getUsuario, createUsuario, updateUsuario, getUsuarioU} from "../../src/controller/usuarioController.js"
module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send ({
        message: 'Example project did not give you access to the api web services',
    }));
    app.get('/api/usuario', getUsuario);
    // app.post('/api/usuario/create/username/:username/status/:status', usuarioController.create);
    app.post('/api/usuario', createUsuario);

    app.get('/api/getUsuario/:id', getUsuarioU);

    app.get('/api/usuario/list', (req, res) => res.status(200).send ({
        message: 'usuario lista',
    }));
    //app.get('/api/usuario/find/username/:username', usuarioController.find);

    app.put('/api/usuarioModificar/:id', updateUsuario)

    //eliminar solo cambiar el activo
     app.put('/api/usuarioEliminar/:id',)
};
