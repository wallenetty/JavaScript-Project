// Write out a switch statement
function Animal_Function() {
    var Animal_Output;
    var Animals = document.getElementById("Animal_Input").value;
    var Animal_String = " is a good choice!";
    switch (Animals) {
        case "Cat":
            Animal_Output = "Cat" + Animal_String;
        break;
        case "Dog":
            Animal_Output = "Dog" + Animal_String;
        break;
        case "Fish":
            Animal_Output = "Fish" + Animal_String;
        break;
        case "Hamster":
            Animal_Output = "Hamster" + Animal_String;
        break;
        case "Snake":
            Animal_Output = "Snake" + Animal_String;
        break;
        case "Lizard":
            Animal_Output = "Lizard" + Animal_String;
        break;
        default:
        Animal_Output = "Please enter an animal exactly as written on the list above.";
    }
    document.getElementById("Output").innerHTML = Animal_Output;
}

// Utilize the document.getElementsByClassName() method
const collection = document.getElementsByClassName("example");
collection[0].innerHTML = "This first line returns a different message";

// Add a graphic within the canvas, draw a circle
var m = document.getElementById("canvas_Example");
var ctx = m.getContext("2d");
ctx.beginPath();
// 1st number is horizontal orientation, 2nd number is vertical orientation, 3rd number is size of circle, 4th number is portion of circle (0=>100%), 5th number is half(1) or whole(2) circle drawn
ctx.arc(200,100,75,0, 2 * Math.PI);
ctx.stroke();

// Utilize the createLinearGradient() method
var l = document.getElementById("canvas_Example2");
var ctx_2 = l.getContext("2d");
// Create gradient
var gradient = ctx_2.createLinearGradient(0,0,200,0);
gradient.addColorStop(0, "green");
gradient.addColorStop(1, "white");
// Fill with gradient
ctx_2.fillStyle = gradient;
ctx_2.fillRect(10,20,200,150);