const express = require('express');
const router = express.Router();
const { Router } = express;
const mongoose = require('mongoose')


const productosAPI = require('./Daos/ProductosDaoMongoDb')
const CarritosAPI = require('./Daos/CarritosDaoMongoDb')

/*
const productosAPI = require('./Clases');
const CarritosAPI = require('./ClasesCarrito');*/

router.post('/', (req, res) => {  //agrega carrito nuevo//
    res.json(CarritosAPI.addCar(req.body))

})

router.put('/:id', async (req, res) => {  //agrega producto req postman a carrito existente//
    const ID = parseInt(req.params.id);
    const body = req.body;
    const product = await CarritosAPI.addProd(ID, body);
    res.json(product)}
    
);

router.delete('/:id' , (req, res)=> {  //Elimina carrito buscado por ID//
    const ID = parseInt(req.params.id);
    res.json(CarritosAPI.DeletebyID(ID))         

})
router.get('/:id/productos', async (req, res) => { //Obtiene todos los productos dentro del carrito x ID//
    const ID = req.params['id'];
    const IDProductos = await CarritosAPI.getProductbyID(ID)
    res.json(IDProductos)
           
})

router.post('/:id/productos/:idProd', async (req, res) => { //Router para persistencia en memoria
    const IdCar = req.params['id']; 
    const IdProd = req.params['idProd'];
    const findCar = await CarritosAPI.getCarbyID(IdCar);
    const carProduct = findCar[0].producto;
    const findProd = await productosAPI.getIdProduct(IdProd);         
    carProduct.push(findProd); 
    res.json(findCar)

})



//NOTA: En este router quiero agarrar un  producto por ID de la coleccion de productos y pegarlo en el campo producto de la 
//coleccion carritos 

router.post('/:id/productosMongo/:idProd', async (req, res) => { //----Router solo para mongo
    const IdCar = req.params['id'];
    const IdProd = req.params['idProd'];
    const findProd = JSON.stringify(await productosAPI.getIdProduct(IdProd));    
    console.log(findProd); 
    res.json(await CarritosAPI.addProdtoCar(IdCar, findProd))

})


router.delete('/:id/productos/:idProd', async (req, res) => {
    const IdCar = req.params['id'];
    const IdProd = req.params['idProd'];
    const deleteProd = await CarritosAPI.deleteProductbyID(IdCar, IdProd);  
    res.json(deleteProd)

})


module.exports = router;