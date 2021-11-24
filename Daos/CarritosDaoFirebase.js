const ContenedorFirebase = require('../ClasesCarritoFirebase');

class CarritosDaoFirebase extends ContenedorFirebase {

    constructor() {
        super('productos')
    }
}

const CarritoDao = new CarritosDaoFirebase()
module.exports = CarritoDao;
