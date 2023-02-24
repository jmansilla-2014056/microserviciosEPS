const Router = require('express');
const router = Router();
const jwt = require('jsonwebtoken');

//middleware para validar rutas y permisos
const {validate_session,validate_premium} = require('../middleware/validations');
const userCtl = require("../controllers/Ctl");


//los endpoints aqui

router.get('/', (req, res) => {
    res.send("Modulo de Usuario");
});

//Estadio
router.post("/test", userCtl.FTest);
router.post("/auth", userCtl.Auth);
router.post("/")

router.post('/verify', (req, res) => {

    const token = jwt.sign({user: req.body.user}, 'seedusalud', {
        algorithm: "HS256",
        expiresIn: 5440
    })

    res.json({
        token: token
    });

});

module.exports = router;
