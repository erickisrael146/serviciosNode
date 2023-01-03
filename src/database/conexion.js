import {Sequelize} from 'sequelize'
const Pool = require('pg').Pool


export const sequelize2 = new Sequelize('krgrrqxq', 'krgrrqxq', 'speQg-H3ErpAWLXp_JqN9QIO4cQw_Yni',
    {
        host: 'peanut.db.elephantsql.com',
        dialect: 'postgres',
    })
