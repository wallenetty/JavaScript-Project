// Write a global variable (can be accessed from any function within the program)
var A = 20;
function Multiply_numbers_1() {
    document.write(5 * A + "<br>");
}
function Multiply_numbers_2() {
    document.write(A * 25);
}
Multiply_numbers_1();
Multiply_numbers_2();
document.write("<br>");

// Write a local variable (can only be accessed by the function it is assigned to)
function Multiply_numbers_3() {
    var B = 6;
    document.write(5 * B + "<br>");
}
function Multiply_numbers_4() {
    document.write(B * 10);
}
Multiply_numbers_3();
Multiply_numbers_4();
document.write("<br>");

// Intentionally write a function with an error in it and use console.log() method to debug it
function Multiply_numbers_3() {
    var B = 6;
    console.log(5 * B);
}
function Multiply_numbers_4() {
    console.log(B * 10);
}
Multiply_numbers_3();
Multiply_numbers_4();

// Write out a function with an if statement that utilizes the new Date().getHours() method
function get_Date() {
    if (new Date().getHours() < 20) {
// Write out a document.getElementById() method and reference the id attribute in the HTML file
    document.getElementById("Salutations").innerHTML = "Greetings, how are you today?";
    }
}

// Write your own If statement, message will display if the getMonth() is greater than the actual month of the year
function get_Date2() {
    if (new Date().getMonth() < 6) {
        document.getElementById("Original").innerHTML = "The month of the year is earlier or equal to the month selected.";
    }
}

// Write a function that includes an if statement and an else statement
function Age_Check() {
// Write the relevant document.getElementById() methods
    Age = document.getElementById("Age").value;
    if (Age >= 16) {
        Drive = "You are old enough to get a driver's license.";
    }
    else {
        Drive = "You are not old enough to get a driver's license.";
    }
    // Write the relevant document.getElementById() methods
    document.getElementById("Old_enough").innerHTML = Drive;
}

// Write out all code from step 150 and remember to add in the <script> element
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}