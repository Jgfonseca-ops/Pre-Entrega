const ContenedorMongoDb= require('./ClaseProductoMongoDB')

class ProductosDaoMongoDb extends ContenedorMongoDb {

    constructor(){
        super('productos', {
            id: {type: Number, required: true},
            Fecha: {type: String, required: true},
            Nombre: {type: String, required: true},
            Descripcion:{type: String, required: true},
            Codigo: {type: Number, required: true},
            Precio: {type: Number, required: true},
            Stock: {type: Number, required: true}
        });
    }


}

const productosDao = new ProductosDaoMongoDb()
module.exports = productosDao;
