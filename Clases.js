class Productos{
    constructor(product){
        this.product = product;
           }
    addProduct(newProduct){
        const newProd = {...newProduct, id: ++this.id}
        this.product.push(newProduct);
        return(newProd)
       
    }
    getIdProduct(ID){
        const findId = this.product.filter(e => e.id == ID);
        return(findId)
    }
    ModifyByID(prod, ID){
        const newProd = { id: Number(ID), ...prod}
        const index = this.product.findIndex(e => e.id == ID);
        if (index !== -1){
            this.product[index] = newProd
            return newProd
        } else { return { error: 'producto no encontrado'}}
        
    }
    DeletebyID(ID){
        const index = this.product.findIndex(e => e.id == ID);
        if (index !== -1){
            return this.product.splice(index, 1)
        } else { return { error: 'no se encontro ID'}}
        
    }

}
    


const productos = new Productos([{id: 1, Fecha: "27/10/2021",Nombre: "Cuaderno",Descripcion:"x80 hojas anillado",Codigo:1560,Precio:130 ,Stock:56}]);

productos.addProduct({id: 2, Fecha: "27/10/2021",Nombre: "Regla",Descripcion:"x30 cms",Codigo:1660,Precio:75,Stock:25})


module.exports = productos;