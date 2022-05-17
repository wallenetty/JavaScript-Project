// Write the following code from step 128
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// Create a basic program that outputs wheether or not a user is old enough to vote
function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

// New Keyword Assignment, Object Contructor Function start
function Pet(Type, Breed, Ages, Color) {
        this.Pet_Type = Type;
        this.Pet_Breed = Breed;
        this.Pet_Ages = Ages;
        this.Pet_Color = Color;
    }

var Jeannette = new Pet("Cat", "Domestic Shorthair", 13, "Tortoiseshell");
var Barrie = new Pet("Dog", "Springer Spaniel", 6, "Liver & White");
var Carley = new Pet("Cat", "Domestic Shorthair", 1, "Black");
function myFunction() {
    document.getElementById("New_and_This").innerHTML = "Barrie owns a " + Barrie.Pet_Color + "-colored " + Barrie.Pet_Type;
}
// New Keyword Assignment, Object Contructor Function end

//Assign a variable the value of a reserved word and attempt to display in the browser
var password = password;
document.write(password);

// Write a nested function
function multiply_Function() {
    document.getElementById("Nested_Function").innerHTML = Multiply ();
    function Multiply () {
        var Starting_point = 3;
        function Multiply_two() {Starting_point *= 2;}
        Multiply_two();
        return Starting_point;
    }
}