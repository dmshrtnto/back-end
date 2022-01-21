const express = require("express");
const cors = require("cors");
const app = express();
const link = require("./routes/routes");

app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }));
app.use(express.json());
app.use("/api", link.testRouter);
app.listen(3000, () => {
    console.log('My REST API running on port 3000!');
});
//module.exports = app;