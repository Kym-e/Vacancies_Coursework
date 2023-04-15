//alert("Hello World. This is an alert from an external JS file");
console.log("This is a log from an external JS file");

//var hello = "Hello World. This value was stored in a variable!";

//var hello;
//hello = "Hello World. This value was stored in a variable!";

// not needing to declare the type
var integerVar = 100;
var floatVar = 1.23456;
var strVar = "myString";
var boolVar = true;

console.log(typeof integerVar);

//const
const myConst = "myConst";
//myConst = "thisWontWork";

// maths
var num1 = 5;
var num2 = 10;

console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 + num2 - num1);
console.log(num1 + 10 + num2);
// due to dynamic typing the string "5" is converted into a number
console.log(num1 * "5");
console.log(num1 ** 2);
console.log(23 % num1);

var c1 = 10;
var c1s = "10";
var c2 = 5;
var c2s = "5";

// equal comparator == checks if only the VALUE is equal
console.log("equal value");
console.log(c1 == c1s);
console.log(c1 == 10);
console.log(c1 == c2);

// equal value & type comparator === checks if the Value and Type are equal
console.log("equal value and type");
console.log(c1 === c1s);
console.log(c1 === 10);
console.log(c1 === c2);

// not equal comparator != checks if only the VALUE is not equal
console.log("NOT equal value and type");
console.log(c1 != c1s);
console.log(c1 != 10);
console.log(c1 != c2);

// not equal comparator !== checks if the VALUE is not equal OR the type is not equal
console.log("NOT equal value and NOT equal type");
console.log(c1 !== c1s);
console.log(c1 !== 10);
console.log(c1 !== c2);

// greater / lesser than
console.log("greater/lesser than");
console.log(c1 > c2);
console.log(c1 > c2s);
console.log(c2 < c2);

// greater / lesser or equal than
console.log("greater/lesser or equal than");
console.log(c1 >= c2);
console.log(c1 <= c2s);
console.log(c2 <= c2s);

// && checks if both comparisons are TRUE
console.log("Logical AND");
console.log(c1 == 10 && c2 == "5");
console.log(c1 == 5 && c2 == "5");

// || checks if ONE or BOTH comparisons are True
console.log("Logical OR");
console.log(c1 == 10 || c2 == "5");
console.log(c1 == 5 || c2 == "5");
console.log(c1 == 5 || c2 == 10);

// if statements
var grade = 20;
if (grade < 40) {
  console.log("You did not pass this course");
} else if (grade >= 70) {
  console.log("Well done. This is an A");
} else {
  console.log("Congrats. You Passed");
}

function gradingFunction(studentGrade, studentName) {
  // function returns the grade and the student name
  if (studentGrade < 40) {
    return studentName + " did not pass this course";
  } else if (studentGrade >= 70) {
    return studentName + " did a very good job. This is an A";
  } else {
    return studentName + " passed";
  }
}
// calling the function & assigning the return to a variable
var statement = gradingFunction(50, "Karl");
console.log(statement);

// for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}


function interestCalc(initialAmount, yearsInvested, interestRate) {
  if (interestRate < 0) {
    console.log("Negative interest not possible.");
  } else if (interestRate == 0) {
    console.log("There is no interest.");
  } else {
    for (let y = 1; y <= yearsInvested; y++) {
      var final_amount = initialAmount * (1 + interestRate) ** y;
      console.log(
        "Year:" + y + " , Total Interest:£" + Math.round(final_amount - initialAmount)
      );
    }
    console.log(
      "The final amount after investing £" +
      initialAmount +
      " for " +
      yearsInvested +
      " years is £" +
      Math.round(final_amount)
    );
  }
}

// 1st argument is the amount, 2nd the number of years, 3rd the interest
interestCalc(1000, 5, 0.03);
interestCalc(1000, 5, 0.0);
interestCalc(1000, 5, -0.05);




