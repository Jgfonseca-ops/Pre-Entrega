const express = require('express');
const router = express.Router();
const { Router } = express;


const productosAPI = require('./Daos/ProductosDaoMongoDb')
/*
const productosAPI = require('./Clases');
*/
const admin = true


router.get('/productos', (req, res)=> {
    res.json(productos)      
});

router.get('/productosMongo', async (req, res)=> {
    const productos = await productosAPI.getProduct()
    res.json(productos)      
});

router.get('/productos/:id', async (req, res) => {       
    const ID = req.params['id'];
    const IDProduct = await productosAPI.getIdProduct(ID)
    console.log(IDProduct);
    res.json(IDProduct)
              
});
router.post('/', async (req, res) => {
    if(admin){     
    const newProduct = req.body;
    res.json( await productosAPI.addProduct(newProduct))}
    else{ res.send("OLNY ADMIN CAN HAVE ACCESS")}    
});

router.delete('/:id' , async (req, res)=> {
    if(admin){   
    const ID = parseInt(req.params.id);
    res.json( await productosAPI.DeletebyID(ID))}
    else{ res.send("OLNY ADMIN CAN HAVE ACCESS")}  

});
router.put('/:id', async (req, res) => {
    if(admin){ 
    const ID = parseInt(req.params.id);
    const body = req.body;
    const product = await productosAPI.ModifyByID(ID, body);
    res.json(product)}
    else{ res.send("OLNY ADMIN CAN HAVE ACCESS")}

});



module.exports = router;