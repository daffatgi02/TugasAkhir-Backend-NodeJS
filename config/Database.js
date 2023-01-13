import { Sequelize } from "sequelize";

const db = new Sequelize('s40_daffa_db','root','12345678',{
    host: '35.240.133.47',
    dialect: 'mysql'
});

export default db;

