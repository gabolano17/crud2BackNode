const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const rutas = require('./routes/users');
const db = require('./config/db');

const app = express();


db.sync().then(() => {
    console.log('Conexion a la bd exitosa!!!')
}).catch(err => {console.error('error', err)})

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/users', rutas);

app.listen(3000, () => {
    console.log('Server corriendo en el port ', 3000)
})