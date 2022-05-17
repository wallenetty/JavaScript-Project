// Create a function that returns the result of an addition operation to the paragraph element with the id "Math"
function addition_Function() {
    var addition = 3 + 5;
    document.getElementById("Math").innerHTML = "3 + 5 = " + addition;
}

// Write a subtraction operation
function subtraction_Function() {
    var subtraction = 25 - 6;
    document.getElementById("Subtract").innerHTML = "26 - 6 = " + subtraction;
}

// Write a multiplication operation
function multiplication_Function() {
    var multiplication = 5 * 8;
    document.getElementById("Multiply").innerHTML = "5 * 8 = " + multiplication;
}

// Write a division operation
function division_Function() {
    var division = 52 / 8;
    document.getElementById("Division").innerHTML = "52 / 8 = " + division;
}

// Write a multiple operations equation
function more_Math() {
    var multiple_Math = (2 + 6) * 3 / 4 - 2;
    document.getElementById("mathPlus").innerHTML = "2 plus 6, multiplied by 3, divided by 4 and then subtracted by 2 equals " + multiple_Math
}

// Write a modulus operator equation
function modulus_Operator() {
    var modulus_Math = 56 % 3;
    document.getElementById("moreMath").innerHTML = "When you divide 56 by 3 you have a remainder of: " + modulus_Math;
}

// Write a negation operation equation
function negation_Operator() {
    var x = 123;
    document.getElementById("Neg").innerHTML = -x;
}

// Write a increment operator (help from Instructor Frank)
var A = 8;
A++;
document.write(A + "<br>");

// Write a decrement operator (help from Instructor Frank)
var B = 6;
B--;
document.write(B + "<br>");

// Return a random number between 0 and 1
document.write(Math.random() + "<br>");

// Return a random number between 0 and 50
document.write(Math.random() * 50 + "<br>");

// JavaScript Math Object method - Math.floor() returns the value of x rounded down to its nearest integer
document.write(Math.floor(4.3) + "<br>");

