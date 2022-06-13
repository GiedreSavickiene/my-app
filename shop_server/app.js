const express = require('express')
const app = express()
const port = 3003

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

const cors = require("cors");
app.use(cors());

const mysql = require("mysql");
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "big_shop",
    port: 3307

});

//READ

app.get("/admin/products", (req, res) => {
    const sql = `SELECT * FROM products`;

    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});



// //CREATE, irasymas i duomenu baze

app.post("/admin/products", (req, res) => {
    const sql = `
        INSERT INTO products
        (title, code, price, description)
        VALUES (?, ?, ?, ?)
    `;

    con.query(
        sql,
        [req.body.title, req.body.code, req.body.price, req.body.description],
        (err, results) => {
            if (err) throw err;
            res.send(results);
        }
    );
});



// //DELETE 
app.delete('/admin/products/:id', (req, res) => {
    const sql = `
        DELETE FROM products
        WHERE id = ?
        `;
    con.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// //EDIT TREES
// app.put("/trees/:id", (req, res) => {
//     const sql = `
//         UPDATE trees
//         SET title = ?, type = ?, height = ?
//         WHERE id = ?
//     `;

//     con.query(sql, [req.body.title, req.body.type, req.body.height, req.params.id], (err, results) => {
//         if (err) throw err;
//         res.send(results);
//     });
// });




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})