import {Sequelize} from "sequelize";
import db from "../config/db.js";

const {DataTypes} = Sequelize;

const ListTodo = db.define('listtodo', {
    item: DataTypes.STRING,
    kondisi: DataTypes.ENUM('penting', 'santuy', 'mendadak'),
    deadline: DataTypes.DATE,
},{
    freezeTableName:true,
    timestamp:false
});


export default ListTodo;

(async() =>{
    await db.sync();
})();