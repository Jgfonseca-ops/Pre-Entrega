const config = require('./config')
const mongoose = require('mongoose')
const productosAPI = require('./Daos/ProductosDaoMongoDb')



try {
    mongoose.connect(mongodb.cnxServer, mongodb.options);
    console.log('Base de datos conectada')
    }
    catch (error) {
        console.log(`Error de conexión a la base de datos ${error}`)
    }


class ContenedorCarritoMongoDb{
        constructor(nombreColeccion, esquema){
            this.coleccion = mongoose.model(nombreColeccion, esquema)
        }
    
        async addCar(newCar){ 
            try {    
            const docs = await this.coleccion.create(newCar);
            console.log('Carrito agregado exitosamente');
            return docs
            }
            catch (error) {
                console.log('Error no se puede guardar carrito')
            }
        }

        async addProd(ID, prod){ 
            try {    
            const docs = await this.coleccion.findOneAndUpdate({id: ID},prod);
            console.log('Producto/coleccion agregado exitosamente');
            return docs
            }
            catch (error) {
                console.log('Error no se puede agregar producto')
            }
        }


//NOta: estoy usando este meotodo para enviarle como parametro el id carrito y lo que quiero modificar,
//ya probe con save(), update() y no me funciono. Con FindoneAndUPDATE  me dice que lo agrega exitosamente
//pero cuando lo consulto en el CLI de mongo no lo agrega. 

        async addProdtoCar(ID, prod){ 
            try {    
            const docs = await this.coleccion.findOneAndUpdate(ID,prod);
            console.log('Producto/coleccion agregado exitosamente');
            return docs
            }
            catch (error) {
                console.log('Error no se puede agregar producto')
            }
        }

        async DeletebyID(ID){ 
            try {    
            const docs = await this.coleccion.deleteOne({id:ID});
            console.log('Carrito eliminado');
            return docs
            }
            catch (error) {
                console.log('Error no se encuentra carrito por ID')
            }
        }
        async getProductbyID(ID){ 
            try {    
            const docs = await this.coleccion.find({id:ID},{ id: 0, Fecha: 0, __v:0, _id:0 });
            console.log('Producto encontrado dentro del carrito');
            return docs
            }
            catch (error) {
                console.log('Error no se encuentra producto por ID en el carrito')
            }
        }
        async getCarbyID(ID){ 
        try {    
            const docs = await this.coleccion.find({id:ID});
            console.log('Carrito encontrado');
            return docs
            }
        catch (error) {
                console.log('Error no puede obtener ID de carrito')
            }
        }
        async deleteProductbyID(IdCar, IdProd){ 
        try {    
            const docs = await this.coleccion.updateOne({id:IdCar},{$unset:{Productos:{id:IdProd}}});
            console.log('producto borrado');
            return docs
            }
            catch (error) {
                    console.log('Error no puede borrar el producto')
            }
        }
        async buscarProd(){


        }

        
    }
    
    module.exports = ContenedorCarritoMongoDb;
        