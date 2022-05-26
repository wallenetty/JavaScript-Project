// Utilize JavaScript for form validation to a field(s) of your contact form
function validateForm() {
    let x = document.forms["myForm"]["fname"]["lname"]["address"].value;
    if (x == "") {
        alert("This field must be filled out");
        return false;
    }
}