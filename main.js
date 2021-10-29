const express = require('express');
const app = express();
const { Router } = express;
const admin = true; 

const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`el servidor http esta escuchando en el puerto ${server.address().port}`)
});
server.on("error", error => console.log(`error en el servidor`));

app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.use('/api', require('./Routers'));



app.use('/api/carrito', require('./RoutersCarrito'));