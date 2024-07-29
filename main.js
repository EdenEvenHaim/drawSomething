const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");

const canvasRect = document.getElementById("myCanvas").getBoundingClientRect();

// Start a new drawing:
function mark() {
    ctx.beginPath();
}

// Paint while left-button is clicked:
function paint(event) {
    if (event.buttons !== 1) return;
    ctx.lineTo(event.clientX - canvasRect.left, event.clientY - canvasRect.top); // Draw a line.
    ctx.stroke(); // Paint
}

// Change color: 
function changeColor(color) {
    ctx.strokeStyle = color;
}

// Change thickness:
function changeThickness(width) {
    ctx.lineWidth = width;
}

// Clear canvas:
function clearCanvas() {
    ctx.clearRect(0, 0, 900, 470);
}

function randomLetter() {
    const alphabet = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    const randomLetter = alphabet[randomIndex];
    
    clearCanvas();  
    ctx.font = 'bold 400px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 5;
    ctx.strokeText(randomLetter, 900 / 2, 470 / 2);
}

function randomNumber() {
    const numbers = `1234567890`;
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const randomNumber = numbers[randomIndex];

    clearCanvas();  
    ctx.font = 'bold 400px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 5;
    ctx.strokeText(randomNumber, 900 / 2, 470 / 2);
}

let isCustomBackground = false;

function changeBackground() {
    const button = document.getElementById("changeBackgroundBtn");
    if (isCustomBackground) {
        document.body.style.background = "linear-gradient(135deg, #ffc0cb, #fffacd, #ee82ee)"; // Original gradient
        button.style.backgroundColor = "#ff69b4";
    } else {
        document.body.style.background = "linear-gradient(135deg, #00BFFF, #90EE90, #D3D3D3)"; // New gradient
        button.style.backgroundColor = "#00BFFF";
    }
    isCustomBackground = !isCustomBackground; // Toggle the flag
}