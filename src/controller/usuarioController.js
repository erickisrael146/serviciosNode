import {UsuarioModel} from "../../src/models/usuarioModel.js"

export const getUsuario = async (req, res) => {
    try {
        const usuarioss = await UsuarioModel.findAll()
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        res.status(200).send(usuarioss);
    }catch (e) {
        console.log(e)
        res.sendStatus(500);
    }
    // res.send('consiguiendo usuarios')
}

export const createUsuario = async (req, res) => {
    const caracter = req.body;
    console.log(caracter)
    try {
        const {nombre, apellidoPat, apellidoMat, email} = req.body

        const newUsuario = await UsuarioModel.create({
            nombre,
            apellidopat: apellidoPat,
            apellidomat: apellidoMat,
            email,
            activo: 1
        })

        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

        console.log(newUsuario)
    }catch(e){
        console.log(e)

    }

}
