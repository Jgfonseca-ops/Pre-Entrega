const config = require('./config')
const mongoose = require('mongoose')

try {
mongoose.connect(mongodb.cnxServer, mongodb.options);
console.log('Base de datos conectada')
}
catch (error) {
    console.log(`Error de conexión a la base de datos ${error}`)
}

class ContenedorMongoDb{
    constructor(nombreColeccion, esquema){
        this.coleccion = mongoose.model(nombreColeccion, esquema)
    }
    async addProduct(newproduct){
        try {    
        const docs = await this.coleccion.create(newproduct);
        console.log('Producto/coleccion creada exitosamente');
        return docs
        }
        catch (error) {
            console.log('Error no se puede guardar elemento')
        }
    }


}
module.exports = ContenedorMongoDb;
