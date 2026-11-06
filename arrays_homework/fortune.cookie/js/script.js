/**
 * fortune cookie
 * Nicolas Robledo Sanchez
 * 
 * I created cookie that it opens when you click on it,
 * when the cookie is open it will appeared a random message.
 */

"use strict";

const cookie = {
    x: 350,
    y: 280,
    size: 260,

}

let fortunes = [
    "Good things are coming",
    "Today is your lucky day",
    "Take a break, you earned it",
    "Your code will work soon",
    "A surprise is on its way",
];

let chips = [
    { x: 270, y: 210, size: 26 },
    { x: 300, y: 290, size: 22 },
    { x: 255, y: 340, size: 24 },
    { x: 315, y: 235, size: 18 },
    { x: 305, y: 360, size: 20 },
    { x: 420, y: 205, size: 24 },
    { x: 400, y: 270, size: 26 },
    { x: 440, y: 330, size: 22 },
    { x: 390, y: 350, size: 18 },
    { x: 450, y: 260, size: 20 }
];


function setup() {
 createCanvas(700, 600);
}



function draw() {
background("#8b2e2e");

drawWholeCookie(cookie);

for (let chip of chips) {
    drawChip(chip);
}
}

function drawWholeCookie(cookie) {
  push();
    noStroke();
    // Darker edge
    fill("#b5792e");
    ellipse(cookie.x, cookie.y, cookie.size + 12);
    // Surface
    fill("#e0a64f");
    ellipse(cookie.x, cookie.y, cookie.size);
    pop();
}

function drawChip(chip) {
    push();
    noStroke();
    fill("#4a2c17");
    ellipse(chip.x, chip.y, chip.size, chip.size * 0.8);
    pop();
    }

   