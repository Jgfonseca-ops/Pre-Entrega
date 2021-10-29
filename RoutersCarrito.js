const express = require('express');
const carritos = require('./ClasesCarrito');
const router = express.Router();
const { Router } = express;
const productos = require('./Clases');
const Carritos = require('./ClasesCarrito');

router.post('/', (req, res) => {
    const newCarrito = req.body;
    Carritos.addProduct(newCarrito);
    res.json(Carritos)

})
router.delete('/:id' , (req, res)=> {
    const ID = parseInt(req.params.id);
    Carritos.DeletebyID(ID);
    res.json(Carritos)         

})

router.get('/:id/productos', (req, res) => {        
    const ID = req.params['id'];
    const IDProductos = Carritos.getProductbyID(ID)
    res.json(IDProductos)
           
})

router.post('/:id/productos/:idProd', (req, res) => {
    const IdCar = req.params['id'];
    const IdProd = req.params['idProd'];
    const findCar = Carritos.getCarbyID(IdCar);
    const carProduct = findCar[0].producto;
    const findProd = productos.getIdProduct(IdProd);         
    carProduct.push(findProd); 
    res.json(findCar)

})

router.delete('/:id/productos/:idProd', (req, res) => {
    const IdCar = req.params['id'];
    const IdProd = req.params['idProd'];
    const deleteProd = Carritos.deleteProductbyID(IdCar, IdProd);  
    res.json(deleteProd)

})


module.exports = router;