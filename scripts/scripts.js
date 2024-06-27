"use strict";


const body = document.querySelector("body");
const container = document.querySelector("#container");

const newHeader = document.createElement("header");
newHeader.style.height = "5vh";
body.insertBefore(newHeader, container);

const qtyBtn = document.createElement("button");
qtyBtn.textContent = "Set new quantity";
newHeader.appendChild(qtyBtn);


// Create div's **********************************
function createGrid (numSquares) {
    for (let i = 0; i < numSquares; i++) {
        const squareDiv = document.createElement("div");

        squareDiv.textContent = "Test"; // Temp
        squareDiv.className = "squareDiv";
        const divW = (100 / Math.sqrt(numSquares)) + "vw";

        squareDiv.style.width = divW;
        squareDiv.style.height = divW;
        // squareDiv.style.background = "green"; // Temp

        container.appendChild(squareDiv);
    }
}

// const squares = document.querySelector(".squareDiv");
const squareDiv = document.querySelectorAll("div");
squareDiv.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "red";
    });
});

// Event Listener - qtyBtn ********************************
qtyBtn.addEventListener("click", () => {
    let userQty = null;
    do {
        userQty = prompt("Enter the number of squares to use per side of grid (max: 100)");
    } while (isNaN(userQty) || userQty < 0 || userQty > 100);
    userQty *= userQty;
    clearGrid(container);
    createGrid(userQty);
});

function clearGrid(parent) {
    while(parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};
