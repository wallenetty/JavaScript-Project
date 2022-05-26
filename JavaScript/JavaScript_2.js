// Utilize JavaScript for form validation to a field(s) of your contact form
function validateForm() {
    let fname = document.forms["myForm"]["fname"].value;
    let lname = document.forms["myForm"]["lname"].value;
    let address = document.forms["myForm"]["address"].value;
    let country = document.forms["myForm"]["country"].value;
    if (fname == "" || lname == "" || address == "" || country == "") {
        alert("The form must be filled out completely");
        return false;
    }
}