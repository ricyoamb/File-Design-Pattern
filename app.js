require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 3000;
const router = require("./routes");
const bodyParser = require("body-parser");

const errorHandler = require("./middlewares/errorHandler.js");

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.use(errorHandler);
  
app.listen(PORT, () => {
  console.info(`Server listening on port: ${PORT} `);
});
