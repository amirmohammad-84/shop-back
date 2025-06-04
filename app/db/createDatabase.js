const sqlite3 = require('sqlite3').verbose()
const DBSOURCE = "usersdb.sqlite";
const bcrypt = require('bcryptjs');

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    } 
    else {        
        var salt = bcrypt.genSaltSync(10);
        
        db.run(`CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name text,
                is_admin INTEGER NOT NULL CHECK (is_admin IN (0, 1)),
                phone text,             
                token text,
                loggedin_at TIMESTAMP,
                created_at TIMESTAMP
            )`,
        (err) => {
            if (err) {
                // Table already created
                console.log(err);
            } else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO Users (name, is_admin, phone, created_at) VALUES (?,?,?,?)'
                db.run(insert, ["hesam",1, "09381329963", Date.now()])
            }
        });  

        db.run(`CREATE TABLE IF NOT EXISTS phone_verification  (
                id text UNIQUE,
                phone text,             
                code text UNIQUE,
                created_at TIMESTAMP
            )`, (err) => {
                if (err) {
                    // Table already created
                } else{
                    // Table just created, creating some rows
                }
            })


                    
        db.run(`CREATE TABLE IF NOT EXISTS products (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title text,
                category text,
                body text, 
                price INTEGER,            
                user_id INTEGER,
                created_at TIMESTAMP
            )`,
        (err) => {
            if (err) {
                // Table already created
            } else{
                // Table just created, creating some rows
            }
        });  
    }
});


module.exports = db
