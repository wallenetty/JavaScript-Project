// "Type of" operator for the output "string"
document.write(typeof "word" + "<br>");

// "Type of" operator for the output "number"
document.write(typeof 3 + "<br>");

// Type coercion converts the value to the type it chooses
document.write("10" + 5 + "<br>");

// Write the document.write() method and "type of" operator to display the data type of a variable of your choosing
document.write(typeof true + "<br>"); // "Type of" operator for the output "boolean"
document.write(typeof {name: 'Jeannette', age: 52} + "<br>"); // "Type of" operator for the output "object"

// Utilize type coercion
document.write("Type coercion: Mixing two different data types, words and a number + " + 100 + "<br>");

// Utilize JavaScript to make the browser display NaN
function my_Function1() {
    document.getElementById("NaN").innerHTML = 0/0;
}

// Utilize the isNaN() function to make the browser display "true"
function my_Function2() {
    document.getElementById("True").innerHTML = isNaN('These are words not a number');
}

// Utilize the isNaN() function to make the browser display "false"
function my_Function3() {
    document.getElementById("False").innerHTML = isNaN('100');
}

// To display positive "infinity"
document.write(5E401 + "<br>");

// To display negative "infinity"
document.write(-3E320 + "<br>");

// Boolean assignment, greater than operator (display "true")
document.write((30 > 25) + "<br>");

// Boolean assignment, lesser than operator (display "false")
document.write((31 <= 20) + "<br>");

// Console.log assignment, perform a math operation with the console.log() function
console.log(5 + 5);

// Boolean challenge, display "false" in the console using Boolean logic and the console.log() method
console.log(55 <= 11);

// Double equal signs assignment, return "true"
document.write((10 + 5 == 7 + 8) + "<br>");

// Double equal signs assignment, return "false"
document.write((10 + 5 == 10 + 10) + "<br>");

// Return true by ensuring to match the data type and value
A = "match";
B = "match";
document.write((A === B) + "<br>");

// Return false by writing a different data type and different value
C = "data";
D = 13;
document.write((C === D) + "<br>");

// Return false by writing a different data type but the same value for both
E = 15;
F = "15";
document.write((E === F) + "<br>");

// Return false by writing the same data type but a different value for both
G = 16;
H = 18;
document.write((G === H) + "<br>");

// Utilize the AND operator to display true
document.write((6 < 10 && 9 < 15) + "<br>");

// Utilize the AND operator to display false
document.write((10 > 15 && 2 < 8) + "<br>");

// Utilize the OR operator to display true
document.write((5 > 8 || 16 > 4) + "<br>");

// Utilize the OR operator to display false
document.write((5 > 10 || 5 < 3) + "<br>");

// Utilize the NOT operator to display true
function my_Function4() {
    document.getElementById("Yes").innerHTML = !(64 < 32);
}

// Utilize the NOT operator to display false
function my_Function5() {
    document.getElementById("No").innerHTML = !(59 > 38);
}