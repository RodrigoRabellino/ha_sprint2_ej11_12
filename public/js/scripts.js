const API_URL = "http://localhost:3000/calculator/calc";
const formCalc = document.getElementById("form__calc");
const num1 = document.getElementById("form__num1");
const num2 = document.getElementById("form__num2");
const select = document.getElementById("form__select");
const textResult = document.getElementById("text__result");
let numResult = "";

formCalc.addEventListener("submit", (e) => {
  e.preventDefault();
  if (num1.value !== 0 && num2.value !== 0) {
    fetchData(num1.value, num2.value, select.value);
  }
});

const fetchData = async (num1, num2, param) => {
  await fetch(`${API_URL}?num1=${num1}&num2=${num2}&param=${param}`)
    .then((response) => response.json())
    .then((resp) => {
      numResult = resp;
      textResult.innerText = `Result: ${numResult}`;
    });
};
