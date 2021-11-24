const config = require('./config')
const admin = require('firebase-admin')

admin.initializeApp({
    credential: admin.credential.cert(firebase)
    
})
console.log('Conexion establecida')
const db = admin.firestore();
  
class ContenedorFirebase{
    constructor(nombrecoleccion){
        this.coleccion = db.collection(nombrecoleccion)
    }






    

}

module.exports = ContenedorFirebase;
