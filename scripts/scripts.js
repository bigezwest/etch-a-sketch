"use strict";

const body = document.querySelector("body");
const container = document.querySelector("#container");

const newHeader = document.createElement("header");
newHeader.style.height = "5vh";
body.insertBefore(newHeader, container);

const qtyBtn = document.createElement("button");
qtyBtn.textContent = "Set new quantity";
newHeader.appendChild(qtyBtn);

// Create div's ****************************************************************
function createGrid (numSquares) {
    numSquares *= numSquares;
    for (let i = 0; i < numSquares; i++) {
        const squareDiv = document.createElement("div");

        squareDiv.className = "squareDiv";
        const divW = (100 / Math.sqrt(numSquares)) + "vw";

        squareDiv.style.width = divW;
        squareDiv.style.height = divW;

        container.appendChild(squareDiv);
    }
    const squareDiv = document.querySelectorAll(".squareDiv");
    squareDiv.forEach((squareDiv) => {
        squareDiv.style.opacity = 0;

        squareDiv.addEventListener("mouseover", () => {
            squareDiv.style.backgroundColor = generateRandColor();
            squareDiv.style.opacity = generateOpacity(squareDiv);
        });
    });
}

// Event Listener - qtyBtn *****************************************************
qtyBtn.addEventListener("click", () => {
    let userQty = null;
    do {
        userQty = prompt("Enter the number of squares to use per side of grid (max: 100)");
    } while (isNaN(userQty) || userQty < 0 || userQty > 100);

    clearGrid(container);
    createGrid(userQty);
});

// clearGrid() *****************************************************************
function clearGrid(parent) {
    while(parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
}

// generateOpacity() ***********************************************************
function generateOpacity(item) {
    let style = window.getComputedStyle(item);
    let opacity = style.getPropertyValue("opacity");
    opacity = Number(opacity);

    if (opacity < 1) {
        opacity = opacity + .1;
        opacity = Math.round(opacity * 100) / 100;
    }
    return opacity;
}

// generateRandColor() *********************************************************
function generateRandColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

createGrid(16);
