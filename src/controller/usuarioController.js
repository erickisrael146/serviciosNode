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

export const getUsuarioU = async (req, res) => {
    try {
        const {id} = req.params;
        const usuario = await UsuarioModel.findByPk(id)
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        res.status(200).send(usuario);
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
        res.json(newUsuario)
        console.log(newUsuario)
    }catch(e){
        console.log(e)

    }

}


export const updateUsuario = async (req, res) => {
   try{
       const {id} = req.params;
       const {nombre, apellidoPat, apellidoMat, email} = req.body

       const viejousuario = await UsuarioModel.findByPk(id);
       viejousuario.nombre = nombre;
       viejousuario.apellidopat = apellidoPat;
       viejousuario.apellidomat = apellidoMat;
       viejousuario.email = email;
       viejousuario.activo = viejousuario.activo;

       await viejousuario.save();
       res.header('Access-Control-Allow-Origin', '*');
       res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
       res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
       res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
       res.json(viejousuario)

   } catch(error){
       return res.status(500).json({message: error.message})

   }
}
export const eliminarUsuario = async (req, res) =>{

}
