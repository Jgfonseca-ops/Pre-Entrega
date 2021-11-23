switch (process.env.PERS) {
    case 'mongodb':
        require('./ProductosDaoMongoDb.js')
       
        break;
    default:
        require('./Clases')

        break;
}