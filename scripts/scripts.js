"use strict";

const container = document.querySelector("#container");

// Create 16 div's.
for (let i = 0; i < 16; i++) {
    const squareDiv = document.createElement("div");

    squareDiv.textContent = "Test";
    squareDiv.className = "squareDiv";
    squareDiv.style.background = "green";
    squareDiv.style.width = "25%";

    container.appendChild(squareDiv);
}
