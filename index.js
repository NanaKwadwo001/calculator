"use strict";

//ASSIGNING TO ALL BUTTONS
const zeroEl = document.querySelector(".zero");
const oneEl = document.querySelector(".one");
const twoEl = document.querySelector(".two");
const threeEl = document.querySelector(".three");
const fourEl = document.querySelector(".four");
const fiveEl = document.querySelector(".five");
const sixEl = document.querySelector(".six");
const sevenEl = document.querySelector(".seven");
const eightEl = document.querySelector(".eight");
const nineEl = document.querySelector(".nine");
const equalEl = document.querySelector(".equal");
const addEl = document.querySelector(".add");
const subtractEl = document.querySelector(".subtract");
const multiplyEl = document.querySelector(".multiply");
const divideEl = document.querySelector(".divide");
const acEl = document.querySelector(".ac");
const percentEl = document.querySelector(".percent");
const negativePositiveEl = document.querySelector(".neg-pos");
const decimalEl = document.querySelector(".decimal");
let question = document.querySelector(".question");
let answer = document.querySelector(".answer");

//Where we would save all our operations .i.e all THE numbers and symbols we input
let output = [];

let operator = "";

let process = 0;
/* let process = multiplicationDivision === 1 ? 1 : 0; */

//********** INPUT FOR ALL NUMBERS **********

//WHEN YOU CLICK ON 1
oneEl.addEventListener("click", function () {
  //push 1 to the output array
  output.push(Number(1));

  //display the value(1) which was input
  question.value = output.join("");
});

//WHEN YOU CLICK ON 2
twoEl.addEventListener("click", function () {
  //push 2 to the output array
  output.push(Number(2));

  //display the value(2) which was input
  question.value = output.join("");
});

//WHEN YOU CLICK ON 3
threeEl.addEventListener("click", function () {
  //push 3 to the output array
  output.push(Number(3));

  //display the value(3) which was input
  question.value = output.join("");
});

//WHEN YOU CLICK ON 4
fourEl.addEventListener("click", function () {
  //push 4 to the output array
  output.push(Number(4));

  //display the value(4) which was input
  question.value = output.join("");
});

//WHEN YOU CLICK ON 5
fiveEl.addEventListener("click", function () {
  //push 5 to the output array
  output.push(Number(5));

  //display the value(5) which was input
  question.value = output.join("");
});

//WHEN YOU CLICK ON 6
sixEl.addEventListener("click", function () {
  //push 6 to the output array
  output.push(Number(6));

  //display the value(6) which was input
  question.value = output.join("");
});

//WHEN YOU CLICK ON 7
sevenEl.addEventListener("click", function () {
  //push 7 to the output array
  output.push(Number(7));

  //display the value(7) which was input
  question.value = output.join("");
});

//WHEN YOU CLICK ON 8
eightEl.addEventListener("click", function () {
  //push 8 to the output array
  output.push(Number(8));

  //display the value(8) which was input
  question.value = output.join("");
});

//WHEN YOU CLICK ON 9
nineEl.addEventListener("click", function () {
  //push 9 to the output array
  output.push(Number(9));

  //display the value(9) which was input
  question.value = output.join("");
});

//WHEN YOU CLICK ON 0
zeroEl.addEventListener("click", function () {
  //push 0 to the output array
  output.push(Number(0));

  //display the value(0) which was input
  question.value = output.join("");
});

//WHEN YOU CLICK ON .
decimalEl.addEventListener("click", function () {
  //push . to the output array
  output.push(".");

  //display the value(.) which was input
  question.value = output.join("");
});

//********** INPUT FOR ALL OPERATORS **********

//the Addition Function
let addNumber = function () {
  process += Number(output.join(""));
  output = [];

  answer.value = `ANS ${process}`;
};

//The Subtraction Function
let subtractNumber = function () {
  //when you're subtracting a number from another input number
  if (process !== 0) {
    process -= Number(output.join(""));

    //when you're subtracting from a new input number , becx without this , this situation would return a negative answer
  } else {
    process = Number(output.join(""));
  }

  output = [];
  answer.value = `ANS ${process}`;
};

//THE ADDITION BTN
addEl.addEventListener("click", function () {
  addNumber();
  operator = "+";
});

//THE SUBTRACTION BTN
subtractEl.addEventListener("click", function () {
  subtractNumber();
  operator = "-";
});

//THE MULTIPLICATION BTN

multiplyEl.addEventListener("click", function () {
  output = [];

  if (operator === "") {
    process = Number(output.join(""));
    console.log(process);
  } else {
    process *= Number(output.join(""));
  }

  console.log(process);
  operator = "*";
});

//THE EQUAL TO BTN
equalEl.addEventListener("click", function () {
  //when you click on the button it looks through the code and returns the solution based on the correct operator (+, - , ÷, ×)
  if (operator === "+") {
    addNumber();
  } else if (operator === "-") {
    subtractNumber();
  }
});

//THE AC BTN
acEl.addEventListener("click", function () {
  output = [];

  process = 0;

  operator = "";

  question.value = 0;
  answer.value = 0;
});

//THE PERCENT BTN
percentEl.addEventListener("click", function () {
  process = Number(output.join("")) / 100;

  answer.value = ` ANS ${process}`;
});

/* let gat = [4, 1, 2, 3];
let answers = [];
let product = 1;

for (let i = 0; i < gat.length; i++) {
  product *= gat[i];
  answers.push(product);
  console.log(answers);
}

console.log(answers); */
