const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;
const Pool = require("pg").Pool;
const pool = new Pool({
  host: "db",
  port: 5432,
  user: "admin",
  password: "admin",
  database: "testdata",
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (request: any, response: any) => {
  response.json({ info: "It works!" });
});
app.get("/test_query", (request: any, response: any) => {
  let q = "SELECT * FROM data ORDER BY id ASC";
  pool.query(q, (error: any, results: any) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
});
app.listen(port, "0.0.0.0", () => {
  console.log("listen to 0.0.0.0:30000");
});
