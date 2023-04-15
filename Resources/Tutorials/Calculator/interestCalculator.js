"use strict";

// arrow function that calculates the interest per year in a single line
const calculateInterest = (initialAmount, years, interestRate) => initialAmount * (1 + interestRate) ** years;

// adding the event listener to the form which calls the showResults function when the form is submitted
document.getElementById("interestCalculator").addEventListener("submit", showResults);

// function that calculates the interest for each year and displays the result in the HTML
// it does NOT take any parameters but uses the values from the form
function showResults(evt) {
  evt.preventDefault();

  // get all the values from the form
  let initialAmount = document.getElementById("initialAmount").value;
  let interestRate = document.getElementById("interestRate").value / 100;
  let years = document.getElementById("years").value;

  // get the result element from the HTML and clear its content
  let resultElement = document.getElementById("result");
  resultElement.innerHTML = "";

  // loop through the years and calculate the interest for each year
  for (let y = 0; y < years; y++) {
    let amount = calculateInterest(initialAmount, y, interestRate);
    // create a new paragraph element and add it to the result element
    let p = document.createElement("p");
    p.innerHTML = "Year " + (y + 1) + ": " + amount;
    resultElement.appendChild(p);
  }
};
