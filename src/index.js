// const express = require('express'));
import express from 'express';
import {sequelize2} from "../src/database/conexion.js";
const bodyParser = require('body-parser');
 var cors = require('cors')

const app = express();
const port = 4004;
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
require('./routes')(index);
app.get('/', (req, res) => {
    res.send({
        message: 'Hola Mundo yx7',
    });
})


app.use(cors())

app.listen(5000, () => {
    console.log(`Server ruunning attt port ${port}`);
})

module.exports = app;

async function main() {
    try{
        await sequelize2.authenticate();
        console.log("entro a conexion")
    }catch (error) {
        console.log("no entro a conexion", error)
    }
}
main();

