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
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.sendStatus(401);
    }

    jwt.verify(token, 'secretKey', (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }

        req.user = user;
        res.sendStatus(200);
    });
});

module.exports = router;
