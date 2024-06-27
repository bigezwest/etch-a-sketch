"use strict";

const container = document.querySelector("#container");

// Create 16 div's.
for (let i = 0; i < 240; i++) {
    const squareDiv = document.createElement("div");

    squareDiv.textContent = "Test"; // Temp
    squareDiv.className = "squareDiv";
    const divW = (100 / Math.sqrt(240)) + "vw";

    squareDiv.style.width = divW;
    squareDiv.style.height = divW;
    // squareDiv.style.background = "green"; // Temp

    container.appendChild(squareDiv);
}
