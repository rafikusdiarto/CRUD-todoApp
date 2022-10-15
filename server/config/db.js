import {Sequelize} from "sequelize";

const db = new Sequelize('mylist', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;