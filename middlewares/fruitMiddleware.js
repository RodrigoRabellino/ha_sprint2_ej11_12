const { fruitsList } = require("../src/backScripts");

const addFruit = (req, res, next) => {
  let fruitName = req.body.form__fruit__name;
  
  if (!existsFruit(fruitName)) {
    console.log(fruitsList);
    fruitsList.push(fruitName);
  }
  console.log(fruitsList);
  next();
};

const existsFruit = (fruitName) => {
  for (const fruit of fruitsList) {
    if (fruit === fruitName) {
      console.log("This fruit already exists");
      return true;
    }
  }
  return false;
};

module.exports = { addFruit };
