const ContenedorCarritosMongoDb = require('../ClaseCarritoMongoDb')

class CarritosDaoMongoDb extends ContenedorCarritosMongoDb {

    constructor(){
        super('Carritos', {
            id: {type: Number, required: true},
            Fecha: {type: String, required: true},
            Productos: {type: String, required: false}
        });
    }

}

const carritosDao = new CarritosDaoMongoDb()
module.exports = carritosDao;
