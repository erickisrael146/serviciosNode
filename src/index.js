// const express = require('express'));
import express from 'express';
import {sequelize2} from "../src/database/conexion.js";
const bodyParser = require('body-parser');
 var cors = require('cors')

const index = express();
const port = 4004;
index.use(bodyParser.json());
index.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
require('./routes')(index);
index.get('/', (req, res) => {
    res.send({
        message: 'Hola Mundo yx7',
    });
})


index.use(cors())

index.listen(4004, () => {
    console.log(`Server ruunning attt port ${port}`);
})

async function main() {
    try{
        await sequelize2.authenticate();
        console.log("entro a conexion")
    }catch (error) {
        console.log("no entro a conexion", error)
    }
}
main();

