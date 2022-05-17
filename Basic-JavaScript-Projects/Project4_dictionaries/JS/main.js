// Using JavaScript objects, create a dictionary containing KVPS of your choosing
function my_Dictionary1() {
    var Vehicle1 = {
        Make:"Hyundai",
        Model:"Santa Fe",
        Color:"Green",
        Drivetrain:"All-wheel Drive",
        Age:10,
        License:"HKK 047",
    };
    document.getElementById("Dictionary1").innerHTML = Vehicle1.Color;
}

// JavaScript delete operator, output of this code should be "undefined"
function my_Dictionary2() {
    var Vehicle2 = {
        Make:"Cadillac",
        Model:"Seville",
        Color:"Cream",
        Drivetrain:"Front-wheel Drive",
        Age:23,
        License:"CFE 800"
    };
    delete Vehicle2.Model; // delete operator to remove a value from the dictionary
    document.getElementById("Dictionary2").innerHTML = Vehicle2.Model; // Ensure the delete value is specified by the document.getElementById("Dictionary").innerHTML method
}
