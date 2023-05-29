const express = require("express");
const sql = require("mssql");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.listen(port, () => {
    console.log(`Aplicación en funcionamiento en http://localhost:${port}`);
});

app.use(require("./src/link"));
