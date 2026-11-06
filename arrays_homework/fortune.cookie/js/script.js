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
    
isBroken: false

}

let cookieGap = 140;

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


if (cookie.isBroken) {
drawPaper(cookie)
drawCookieHalves(cookie, cookieGap);

        
for (let chip of chips) {
let moveX = cookieGap;
if (chip.x < cookie.x) {
moveX = -cookieGap;
}
drawChip(chip, moveX);
}
}
else {
drawWholeCookie(cookie);

for (let chip of chips) {
drawChip(chip, 0);
}
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

function drawChip(chip, moveX) {
    push();
    noStroke();
    fill("#4a2c17");
    ellipse(chip.x + moveX, chip.y, chip.size, chip.size * 0.8);
    pop();
}

function drawCookieHalves(cookie, cookiegap) {
    push();
    noStroke();

    // Left
    fill("#b5792e");
    arc(cookie.x - cookieGap, cookie.y, cookie.size + 12, cookie.size + 12, HALF_PI, PI + HALF_PI, CHORD);
    fill("#e0a64f");
    arc(cookie.x - cookieGap, cookie.y, cookie.size, cookie.size, HALF_PI, PI + HALF_PI, CHORD);

    // Right
    fill("#b5792e");
    arc(cookie.x + cookieGap, cookie.y, cookie.size + 12, cookie.size + 12, -HALF_PI, HALF_PI, CHORD);
    fill("#e0a64f");
    arc(cookie.x + cookieGap, cookie.y, cookie.size, cookie.size, -HALF_PI, HALF_PI, CHORD);
    pop();
}

function mousePressed() {
    if (cookie.isBroken) {
        cookie.isBroken = false;
    }
    else {
        cookie.isBroken = true;
    }
}

function drawPaper(cookie, fortune) {
    push();
    noStroke();

    // The paper
    fill("#ffffff");
    rect(cookie.x - 135, cookie.y - 35, 270, 70, 6);

    // The fortune
    fill("#333333");
    textSize(18);
    textAlign(CENTER, CENTER);
    text(fortune, cookie.x, cookie.y);
    pop();
}