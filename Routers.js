const express = require('express');
const router = express.Router();
const { Router } = express;
const productos = require('./Clases');
const admin = false


router.get('/productos', (req, res)=> {
    res.json(productos)      
});

router.get('/productos/:id', (req, res) => {       
    const ID = req.params['id'];
    const IDProduct = productos.getIdProduct(ID)
    res.json(IDProduct)
              
});

router.post('/', (req, res) => {
    if(admin){     
    const newProduct = req.body;
    productos.addProduct(newProduct);
    res.json(productos)}
    else{ res.send("OLNY ADMIN CAN HAVE ACCESS")}    
});

router.delete('/:id' , (req, res)=> {
    if(admin){   
    const ID = parseInt(req.params.id);
    productos.DeletebyID(ID);
    res.json(productos)}
    else{ res.send("OLNY ADMIN CAN HAVE ACCESS")}  

});

router.put('/:id', (req, res) => {
    if(admin){ 
    const ID = parseInt(req.params.id);
    const body = req.body;
    const product = productos.ModifyByID(body, ID);
    res.json(product)}
    else{ res.send("OLNY ADMIN CAN HAVE ACCESS")}

});



module.exports = router;