const express = require("express");
const app = express.Router();
const mssql = require("mssql");
const dbConfig = require("../keys");

app.get("/agente", async (req, res) => {
    try {
        let pool = await mssql.connect(dbConfig);
        let result = await pool.request().query("SELECT * FROM AGENTE");
        res.json(result.recordsets[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send("Ha ocurrido un error");
    }
});

module.exports = app;
