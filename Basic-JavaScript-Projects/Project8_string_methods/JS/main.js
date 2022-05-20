// Utilize the concat() method to connect two or more strings
function full_Sentence() {
    var part_1 = "This is the first part";
    var part_2 = ", this the second part";
    var part_3 = ", this is the third part";
    var part_4 = ", and this is the fourth part of the sentence.";
    var whole_Sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_Sentence;
}

// Write a slice() method that displays a section of a string
function slice_Method() {
    var Sentence = "This is a string of words that we will extract from.";
    var Section = Sentence.slice(20,46);
    document.getElementById("Slice").innerHTML = Section;
}

// Write and execute the toUpperCase() method
function upper_Method() {
    let text = "This was a normal written sentence.";
    let result = text.toUpperCase();
    document.getElementById("Upper").innerHTML = result;
}

// Write and execute the search() method to return the first instance of the selected search criteria
function search_Method() {
    let text2 = "This sentence uses the word \"the\" in multiple parts of the sentence.";
    let position = text2.search("the");
    document.getElementById("Search").innerHTML = position;
}

// Utilize the toString() method to return a number as a string
function string_Method() {
    var S = 519;
    document.getElementById("String").innerHTML = S.toString();
}

// Utilize the toPrecision() method to return a number of a specified length
function precision_Method() {
    var P = 12345.654321;
    document.getElementById("Precision").innerHTML = P.toPrecision(6);
}

// Utilize the toFixed() method to return a number as a string of a specified number of decimal places
function fixed_Method() {
    let num = 9.87654;
    let F = num.toFixed(3);
    document.getElementById("Fixed").innerHTML = F;
}

// Utilize the valueOf() method to convert an object to a primitive value
function value_Method() {
    let text = "This is a string of words!";
    let result = text.valueOf();
    document.getElementById("Value").innerHTML = result;
}