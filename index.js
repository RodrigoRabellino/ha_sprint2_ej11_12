const express = require("express");
const app = express();
const router = require("./routes");
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => {
  console.log("app running in port: " + port);
});
