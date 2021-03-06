const {User} = require('./../models/user');

let auth = (req,res,next)=>{
    const token = req.cookies.tgd_auth;

    User.findByToken(token,(err,user)=>{
        if(err) throw err;

        req.user = user;
        next();
    })
}

module.exports = {auth}