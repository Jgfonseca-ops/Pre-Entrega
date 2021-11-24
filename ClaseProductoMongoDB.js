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
    async getProduct(){
        try {
        const productbyID = await this.coleccion.find();
        console.log('Producto encontrado');
        return productbyID
        }
        catch (error) {
            console.log('Error no se encuentran  productos')
        }
        
    }


    async getIdProduct(ID){
        try {
        const productbyID = await this.coleccion.find({id:ID});
        console.log('Producto encontrado');
        return productbyID
        }
        catch (error) {
            console.log('Error no se encuentra el producto')
        }
        
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
    async ModifyByID(ID, prod){
        try {
        const UpdateDocs = await this.coleccion.findOneAndUpdate({id: ID},prod)
        return UpdateDocs
        } 
        catch (error) {
            console.log('Error no se puede modificar')
        }
    }
    async DeletebyID(ID){
        try {
        const DeleteDocs = await this.coleccion.deleteOne({id:ID});
        return DeleteDocs
        }
        catch (error) {
            console.log('Error no se puede Eliminar')
        }
    }
}

module.exports = ContenedorMongoDb;
