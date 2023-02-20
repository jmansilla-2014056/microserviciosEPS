const UserModal = require("../models/Modal");
const axios = require("axios");
var nodemailer = require('nodemailer');

async function FTest(req, res, next){
        res.json({msg:"metodos de prueba"});
    }

async function Auth(req, res, next){
    if(req.body.username === 'user' && req.body.password === '123456'){
        res.status(200).json({msg:"autorizado"})
    }else{
        res.status(400).json({msg:"no autorizado"});
    }
}

module.exports.FTest = FTest;
module.exports.Auth = Auth;

