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
    database: "labas",
    port: 3307

});

//READ

app.get("/trees", (req, res) => {
    const sql = `SELECT * FROM trees`;

    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.get("/animals", (req, res) => {
    const sql = `SELECT * FROM animals`;

    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

//CREATE, irasymas i duomenu baze

app.post("/trees", (req, res) => {
    const sql = `
        INSERT INTO trees
        (title, height, type)
        VALUES (?, ?, ?)
    `;

    con.query(
        sql,
        [req.body.title, !req.body.height ? 0 : req.body.height, req.body.type],
        (err, results) => {
            if (err) throw err;
            res.send(results);
        }
    );
});

app.post("/animals", (req, res) => {
    const sql = `
        INSERT INTO animals
        (name, type, age, has_owner, )
        VALUES (?, ?, ?, ?)
    `;

    con.query(
        sql,
        [req.body.name, req.body.type, !req.body.age ? 0 : req.body.age, req.body.has_owner],
        (err, results) => {
            if (err) throw err;
            res.send(results);
        }
    );
});

//DELETE Trees
app.delete('/trees/:id', (req, res) => {
    const sql = `
        DELETE FROM trees
        WHERE id = ?
        `;
    con.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

//EDIT TREES
app.put("/trees/:id", (req, res) => {
    const sql = `
        UPDATE trees
        SET title = ?, type = ?, height = ?
        WHERE id = ?
    `;

    con.query(sql, [req.body.title, req.body.type, req.body.height, req.params.id], (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})