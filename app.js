require("dotenv").config();
require("./config/db").connect();
const express = require("express");
const apiRoutes = require("./routes/api.routes");
const cors = require("cors");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "JWT Mongo - API POC",
      version: "1.0.0",
    },
  },
  apis: ["./controllers/*.js"], // Replace with the path to your route files
};

const specs = swaggerJsdoc(options);

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use("/api", apiRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

module.exports = app;
