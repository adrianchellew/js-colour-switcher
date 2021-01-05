const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
const btn = document.getElementById("btn");
const colour = document.getElementById("colour");

function getRandomNumber() {
    // Return a random element from the hex array
    return Math.floor(Math.random() * hex.length);
}

btn.addEventListener("click", function() {
    let hexColour = "#";
    // Build a random hex colour
    for(let i = 0; i < 6; i++) {
        hexColour += hex[getRandomNumber()];
    }
    // Update the hex colour code
    colour.textContent = hexColour;
    // Update the body background colour
    document.body.style.backgroundColor = hexColour;
});