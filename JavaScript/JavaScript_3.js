function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is produced by " + character.innerHTML + " company!");
}