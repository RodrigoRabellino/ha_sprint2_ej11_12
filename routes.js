const express = require("express");
const router = express.Router();
const {
  calculate,
  getDate,
  productsList,
  fruitsList,
} = require("./src/backScripts");
const { addFruit } = require("./middlewares/fruitMiddleware");

router.get("/", (req, res) => {
  res.render("home", { textDate: getDate() });
});
router.get("/home", (req, res) => {
  res.render("home", { textDate: getDate() });
});

router.get("/products", (req, res) => {
  res.render("products", {
    productsList: productsList,
  });
});
router.get("/fruits", (req, res) => {
  res.render("fruits", {
    fruitsList: fruitsList,
  });
});
router.post("/fruits", addFruit, (req, res) => {
  res.redirect("/fruits");
  // res.render("fruits", {
  //   fruitsList: fruitsList,
  // });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/calculator", (req, res) => {
  res.render("calculator");
});

router.get("/calculator/calc", (req, res) => {
  res.end(
    JSON.stringify(calculate(req.query.num1, req.query.num2, req.query.param))
  );
});

module.exports = router;
