class Carritos{
    constructor(carrito){
        this.carrito = carrito;
           }

addCar(newCar){
        const newProd = {...newCar, id: ++this.id}
        this.carrito.push(newCar);
        return(newProd)
        }
    
DeletebyID(ID){
        const index = this.carrito.findIndex(e => e.id == ID);
        if (index !== -1){
         return this.carrito.splice(index, 1)
        } else { return { error: 'no se encontro ID de carruto'}}
            
        } 
getProductbyID(ID){    
        const findId = this.carrito.filter(e => e.id == ID);
        console.log(findId[0].producto);
        return(findId[0].producto)
    }

getCarbyID(ID){    
        const findCar = this.carrito.filter(e => e.id == ID);
        return(findCar)
    }

deleteProductbyID(IdCar, IdProd){
        const findCar = this.carrito.filter(e => e.id == IdCar);
        const productos = findCar[0].producto;
        console.log(productos);
        const index = productos[0].findIndex(e => e.id == IdProd);
        if (index !== -1){
            return productos.splice(index, 1)
        } else { return { error: 'no se encontro ID'}}
        
    }    

}
    
  

const carritos = new Carritos([{id: 1, Fecha: Date.now(), producto: []}]);


module.exports = carritos;