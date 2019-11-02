const alice = document.getElementById("alice");

const drinkShrink = document.getElementById("drink-shrink");

const drinkGrow = document.getElementById("drink-grow");

const room = document.getElementById("room");


document.addEventListener('DOMContentLoaded', function() {
   const welcome = document.createElement("h1");
   welcome.innerHTML = "Make Alice grow or shrink!";
   room.appendChild(welcome);
});


drinkShrink.addEventListener("click", aliceShrink);
function aliceShrink() {
    if (alice.className === "alice-m") {
        alice.setAttribute("class", "alice-s");
    }
    else if (alice.className === "alice-l") {
        alice.setAttribute("class", "alice-m");
    }
    else {
        return;
    }
}

drinkGrow.addEventListener("click", aliceGrow);
function aliceGrow() {
    if (alice.className === "alice-m") {
        alice.setAttribute("class", "alice-l");
    }
    else if (alice.className === "alice-s") {
        alice.setAttribute("class", "alice-m");
    }
    else {
        return;
    }
}