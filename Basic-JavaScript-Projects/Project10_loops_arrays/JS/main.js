// Write a While Loop
function Call_Loop() {
    let text = "";
    let C = 11;
    while (C > 0) {
        // We can use the <br> tag within our string to cause spacing between lines of text
        text += "<br>Countdown from " + C;
        // ++ is used to increment and -- is used to decrement in JavaScript
        C--;
    }
    document.getElementById("Loop").innerHTML = text;
}

// Write a string length property
function string_Length() {
    let text = "A JavaScript string length property returns the length of a string.";
    let length = text.length;
    document.getElementById("Length").innerHTML = length;
}

// Write a For Loop
var Instruments = ["Piano", "Bass", "Drums", "Trumpet", "Guitar", "Trombone", "Violin"];
var Content = "";
var I;
function for_Loop() {
    for (I = 0; I < Instruments.length; I++) {
    Content += Instruments[I] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Write an array within a function to be called
function array_Function() {
    var Couple_Pictures = [];
    Couple_Pictures[0] = "sleeping";
    Couple_Pictures[1] = "waking up";
    Couple_Pictures[2] = "making breakfast";
    Couple_Pictures[3] = "going to work";
// Utilize a function with the document.getElementById().innerHTML method to display a value(s) of your array
    document.getElementById("Array").innerHTML = "Every weekday morning, this couple is " + Couple_Pictures[1] + ", " + Couple_Pictures[2] + " and " + Couple_Pictures[3] + ".";
}

// Create an object through utilization of the const keyword
function constant_function() {
    // include properties with values
    const Household_Vehicles = {make:"Hyundai", model:"Santa Fe", color: "green"};
    Household_Vehicles.price = "$10,000";
    //Change a property's value
    Household_Vehicles.color = "white";
    // Add a property with a value
    Household_Vehicles.age = 9;
    // Create a constant_function() to be called from your HTML that will display a string using the document.getElementById("Constant").innerHTML method
    document.getElementById("Constant").innerHTML = "The cost of the " + Household_Vehicles.make + " was " + Household_Vehicles.price;
    // Display a string that includes the added property value and the changed property value
    document.getElementById("Constant").innerHTML = "The color of the " + Household_Vehicles.model + " is now " + Household_Vehicles.color + " and the car is " + Household_Vehicles.age + " years old.";
}

// Utilize the let keyword
var L = 10;
document.write("<br>" + L); // output will be 10
{
    let L = 55;
    document.write("<br>" + L); // output will be 55
}
document.write("<br>" + L); // output will be 10

// Write and execute a return statement in the browser
document.getElementById("return").innerHTML = myFunction("Jeannette");
function myFunction(name) {
    // The return statement stops the execution of a function and returns a value
    return "Good day " + name;
}

 // create an object using the let keyword, ensure your object includes properties and a method
 let phone = {
    make: "Samsung",
    model: "Galaxy Note 8",
    year: "2018",
    color: "Orchid Gray",
    description : function() {
    // Methods are actions that can be performed on objects, one way is utilizing the return statement and "this" keyword
        return "My current cellphone is a " + this.year + " year " + this.make + " brand " + this.model + " in an " + this.color + " color.";
        }
};
document.getElementById("Phone_Object").innerHTML = phone.description();

// Utilize a break statement. A break statement "jumps out" of a loop
let text1 = "";
for (let b = 1; b < 20; b++) {
    if (b === 15) {break; }
    text1 += "Counting up from " + b + "<br>";
}
document.getElementById("Break").innerHTML = text1;

// Utilize a continue statement. A continue statement "jumps over" only one iteration in the loop
let text2 = "";
for (let t = 11; t < 20; t++) {
    if (t === 15) {continue; }
    text2 += "Counting from " + t + "<br>";
}
document.getElementById("Continue").innerHTML = text2;