// Function that assigns two variables and utilizes the document.getElementById emthod
function displayDate() {
    var str = "Click for current date and time";
    document.getElementById("Date_Time").innerHTML = Date();
}

// Utilize the += operator to concatenate a string
function OperatorAssignment() {
    var sentence = "I am learning how";
    sentence +=" to concatenate a string in JavaScript!";
    document.getElementById("Concatenate").innerHTML = sentence;
}

// write and execute the document.getElementbyId() method
function MultiplyFunction() {
    var multiply = 3 * 4;
    document.getElementById("Function_Challenge").innerHTML = "3 * 4 = " + multiply;
}