{
    mongodb = {
    cnxServer: 'mongodb+srv://Storage:teco2021@cluster0.thh5f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,            
            serverSelectionTimeoutMS: 5000,}
        },
firebase = {    
            "type": "service_account",
            "project_id": "basefirebase-be9d4",
            "private_key_id": "59dca95eb4fcc719dd4599bb6a64ed43900a5eba",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCycml41db/CsFh\np+jSZJqhsUpFAjEKW8cUGd7UP0zoj0S6w0XNRj9kFzqrpFNPMUmxXo83MRicdMv9\n8CspSkrSb2EcJg5SaAgZBcCIx8VR94A0XAzLVJW36+8ClxzYevHDyX0f5bvydgb9\n9/MfY5fnsMD+u0CXYk4pgthSX8H1qtOM+tHxeH48HVx8N5Hectl5Ax5mvxTYpKun\n+EDPl6MxyC2cp/u4SYDl/SA4pkVfD5XpU6r0GcQvQchdMBAZ81x7IsrnsI6IK5Qi\nnsR4KV364lhUOE4FcqYCGygZPT9AbYHqMRhK5lL9eSRm9fj9Zlqt8DJ5U2xx7HfZ\nP0p4LcSrAgMBAAECggEAJKwvsdYcj6CJuoST6/0h7D3vufvn0S2oXaCtcygpKZgb\n81fjNfsMVwkRFSo5tso1z15UB28vFCRKsf7UF/G9K78ZEXxesB/SHjZY6aNIkX5Q\nWjJarMTO2hQCNCGTG4g0vFxhuxbvB7aq3DHDRL2mf8aK+y7HaPUahBxwUYl9Znuj\njqT9fVi4SdcDYKsfSJy26v6uzmaSb2Ernl+h0TuWL+I5SWp4HhmRhSqXelgeP4vm\nlBJC6YHihJeKxPfCBGf0taMbJod0wzixh8RhHZ8DSvQ4RtDUpAwO0YNArPhygS+j\n1e8czLnC2/4PIJ4mPqSdJWFBZxUWPLtc3NCeYIG9UQKBgQDZPSYek7RvnGQ2L8yM\n6+RYCUqIzQc7fILDYnA6khO3eDUGIleYue+ET88Pwc3VPxqltATuPRyi0MGXogjZ\nc0mZwnU+0bhass2nluPgyO+K/cATX1dlOofF2TRdb6RAscA1nnJwTlJ4J6o2g1Wf\nfQ4LJAARnD6aKJ7JKTIZfvdQEQKBgQDSSVuj+TQkA/i5lS2UP6js2i3YIkwqj1/J\nIJX7S2402ymVmBCp/nskhDwi8Mj5Sbj3xg+REaN2fmwhej4giGxJ7Zt3PeID8PAV\n4MLO4/WPoKTfrOfDJqcKhCd/m52MDgOBWneGwWM7hUQxTgO481UXzMxQL3WQBVJn\nZbu46VIE+wKBgCNCToaV+KpI2ucEmRGiU9yKHYPYqzzXd63Ys1h+Tx7vLsQBHPCX\n9S0nevcWwJ7E8EFG16oHVzeB5HoE/aS1lpOTQU5h4acu8DwsPG5GjsKjbuJ2DgxL\nFLBjEaG8tg8eCpFpVy+tNqtz3KeeZ25McNQUEsLI9kw1HZiOzCfhOKjRAoGBAKrV\nL56JYAN2OoTBnTKXeOtZ3+57Bnd43G7viwiIYfKMrT67N6Zyd6XVy2jzRcHHU33u\nqEzJEIu97qhPv9L8IUT5w9feLRPYk6KiYoBjDuXssqSHugx/BSr064WubRIPfGeE\nkB+oUa5T+G85mqqQ++sG1GC7/XzP5f7b1eJFof0rAoGACdDxy+FcPpyAaHlYthU9\nVgI6mYr/ptQetdEThGFzUD09ektHH3Q5JaRBbcUvrYD7fX8SvexpitZFQnQs4xfl\nosGwPma7SYiDxxc1sTcvVMnS4O0uSuKjoI2ZeR6EqUNjgWZohnbtBrPE5k9feBfk\nTAFjDxI2YZEfRGz57o3lJdw=\n-----END PRIVATE KEY-----\n",
            "client_email": "firebase-adminsdk-v9520@basefirebase-be9d4.iam.gserviceaccount.com",
            "client_id": "110706059434111046202",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-v9520%40basefirebase-be9d4.iam.gserviceaccount.com"
         }
}
module.exports = (mongodb,firebase)