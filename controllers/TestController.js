//db
const db =  require("../config/database/db");

//array of controller
const controller = {};

controller.login = async(req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
    
    const listUser = await db.query(`SELECT * FROM CREDENTIALS WHERE USERNAME LIKE '%`+username+`%' AND PASSWORD LIKE '%`+password+`%';`);
    res.status(200).json({
        code: "0",
        msg: "Success",
        data : listUser[0]
    })
    
}

module.exports = controller;