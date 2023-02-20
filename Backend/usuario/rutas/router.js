const Router = require('express');
const router = Router();

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

module.exports = router;
