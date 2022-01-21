const Sequelize = require("sequelize");
const db = new Sequelize("user","root","",
    {
        dialect: "mysql",
        host: "host.docker.internal"
    }); 
module.exports = db;