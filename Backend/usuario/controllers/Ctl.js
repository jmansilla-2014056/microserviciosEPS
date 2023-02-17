const UserModal = require("../models/Modal");
const axios = require("axios");
var nodemailer = require('nodemailer');

async function FTest(req, res, next){
        res.status(400).json({msg:"metodos de prueba"});
    }

module.exports.FTest = FTest;

