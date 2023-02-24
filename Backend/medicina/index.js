const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000 ;
const cors = require('cors');
var corsOptions = { origin: '*', optionsSuccessStatus: 200 };
const context = '/esb/medicina';
const router = require('./rutas/router');
const jwt = require('jsonwebtoken');

app.use(cors());


app.use(verifyToken, (req, res, next) => {
    const token = req.token
    if (!token) {
        return res.status(401).send({ message: 'No se proporcionó un token de autenticación.' });
    }

    try {
       jwt.verify(token, 'seedusalud', (error, authData)=> {
           if (error) {
               return res.status(401).send({ message: 'Token inválido o expirado.' });
           } else {
               //return res.status(200).json( {mensaje: 'exito'})
               next();
           }
       });
    } catch (error) {
        return res.status(401).send({ message: 'Token inválido o expirado.' });
    }

});


app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send({ message: 'Token de autenticación no válido' });
    }
});

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json({ extended: true, limit: '10mb' }));
app.use(cors(corsOptions));

app.use(context, router);

function verifyToken(req, res, next) {
    const bearHeader = req.headers['authorization'];

    if (typeof bearHeader != 'undefined') {
        var bearHeaderToken = bearHeader.split(" ")[1];
        req.token = bearHeaderToken;
        next();
    }else{
        res.sendStatus(403);
    }
}

app.listen(port, () => console.log(`${port}...`));


