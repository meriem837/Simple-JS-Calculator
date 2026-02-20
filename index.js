let expression = "";
let ans = 0;
let display = document.querySelector(".value");
let displayContainer = document.querySelector(".display");

function addValue(event) {
  const value = event.target.textContent;
  if (expression === "0") {
    expression = value;
  } else {
    expression += value;
  }
  display.innerHTML = expression;
  displayContainer.scrollLeft = display.scrollWidth;
}

function calculate() {
  try {
    let result;
    if (expression === "") {
      result = 0;
    } else {
      let evalExpression = expression.replaceAll("Ans", ans);
      result = eval(evalExpression);
      ans = result;
      expression = result.toString();
    }
    display.textContent = result;
  } catch {
    display.textContent = "Error";
  }
}

let equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", calculate);

let buttons = document.querySelectorAll(".elementButton");
buttons.forEach((btn) => {
  btn.addEventListener("click", addValue);
});

let acButton = document.querySelector("#ac");
let deleteButton = document.querySelector(".delete");

deleteButton.addEventListener("click", () => {
  expression = expression.slice(0, -1);
  display.textContent = expression || "0";
});

acButton.addEventListener("click", () => {
  expression = "";
  display.textContent = "0";
});
