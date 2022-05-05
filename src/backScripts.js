const calculate = (num1, num2, param) => {
  console.log(`num1 ${num1} num2 ${num2} param ${param}`);
  if (param === "mul") {
    return num1 * num2;
  }
  if (param === "res") {
    return num1 - num2;
  }
  if (param === "sum") {
    return parseInt(num1) + parseInt(num2);
  }
  if (param === "div") {
    return num1 / num2;
  }
};

const getDate = () => {
  const nowDate = new Date().getDay();
  if (nowDate < 6 && nowDate !== 0) {
    return "Hoy es un día de semana.";
  }
  return "Hoy es fin de semana.";
};

const productsList = [
  "Notebook",
  "MousePad",
  "Monitor",
  "Keyboard",
  "Mouse",
  "Headset",
];
const fruitsList = ["Manzana", "Pera", "Durazno"];



module.exports = { calculate, getDate, productsList, fruitsList };
