const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//db.serialize(() => {
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

    // const query = `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);
    // `

    // const values = [
    //     "https://img.freepik.com/free-photo/used-plastic-bottles-recycling-bins-earth-day-campaign_53876-104848.jpg?w=1800&t=st=1676673379~exp=1676673979~hmac=4ed24ab946da0eab521071b2ee1f48151c790fd3db7d35cb313a4242ae045577",
    //     "Papersider",
    //     "Guilherme Gemballa, Jardim América",
    //     "Nº 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Papéis e Papelão"
    // ]

    // function afterInsertData(err) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }

    //     db.run(query, values, afterInsertData) 

    //     db.all(`SELECT * FROM places`, function(err, rows) {
    //         if(err) {
    //         return console.log(err)
    //     }   

    //     console.log("Aqui estão os seus registros: ")
    //     console.log(rows)
    // })


    // db.run(`DELETE FROM places WHERE id = ?`, [11], function(err) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Registro deletado com sucesso")
    // })

//})