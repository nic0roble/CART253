/**
 * Frost Night
 * Nicolas Robledo Sanchez
 *
 * A farmer has to cover the sunflowers before the night frost freezes them.
 * Idea based on "The Last Lovely Day", an example found on OpenProcessing.
 */

"use strict";

// Counts since the game started
let timer = 0;

// This is when the sunset and the night begin
const sunsetStart = 600;
const nightStart = 1200;

// True when a sunflower freezes
let gameOver = false;

// True when the player survives the night
let gameWon = false;

// When the night ends and the sun comes back
const dawn = 2400;

// How long a cover lasts on the flowers
const coverDuration = 420;

// The sun
const sun = {
    x: 780,
    y: 100,
    size: 110
};

// The moon
const moon = {
    x: 780,
    y: 600,
    size: 110
};

//the farmer 
const farmer = {
    x: 450,
    y: 570,
    width: 50,
    height: 90,
    speed: 5
};

//this is my sunflowers array
let sunflowers = [
    { x: 130, y: 500, stemHeight: 130, size: 65, coverTimer: 0, frost: 0, frostRate: 0.3 },
    { x: 290, y: 500, stemHeight: 150, size: 70, coverTimer: 0, frost: 0, frostRate: 0.5 },
    { x: 450, y: 500, stemHeight: 120, size: 65, coverTimer: 0, frost: 0, frostRate: 0.35 },
    { x: 610, y: 500, stemHeight: 145, size: 70, coverTimer: 0, frost: 0, frostRate: 0.6 },
    { x: 770, y: 500, stemHeight: 135, size: 65, coverTimer: 0, frost: 0, frostRate: 0.4 }
];

// The array of stars
let stars = [
    { x: 80, y: 60, size: 6 },
    { x: 200, y: 130, size: 4 },
    { x: 310, y: 50, size: 5 },
    { x: 420, y: 150, size: 4 },
    { x: 520, y: 70, size: 6 },
    { x: 640, y: 180, size: 4 },
    { x: 730, y: 60, size: 5 },
    { x: 150, y: 220, size: 4 },
    { x: 560, y: 240, size: 5 },
    { x: 850, y: 140, size: 4 }
];

function setup() {
createCanvas(900, 600);
}



function draw() {
background("#8ecae6");
timer = timer + 1;
let phase = getPhase();

drawSky(phase);


if (phase === "night") {
    drawMoon();

    for (let star of stars) {
     drawStar(star);
     }
    }
    else {
    drawSun();
}
drawGround(phase);


for (let sunflower of sunflowers) {
        updateSunflower(sunflower, phase);
        drawSunflower(sunflower);
    }

drawFarmer(farmer);
moveFarmer(farmer);
moveSun(phase);
moveMoon(phase);

drawInstructions();

if (timer >= dawn) {
gameWon = true;
}

if (gameOver) {
drawGameOver();
noLoop();
    }
else if (gameWon) {
drawWin();
noLoop();
}

}

function drawGround(phase) {
push();
noStroke();

    if (phase === "night") {
        fill("#2f4a2a");
    }
    else {
        fill("#6b8f3a");
    }

rect(0, 490, 950, 140);
pop();
}
//this draws the sun 
function drawSun() {
    push();
    noStroke();
    fill("#f3d080");
    ellipse(sun.x, sun.y, sun.size);
    pop();
}

function moveSun(phase) {
    if (phase === "sunset") {
        sun.y = sun.y + 0.8;
    }
}

//this draws the moon
function drawMoon() {
    push();
    noStroke();
    fill("#f1f1e6");
    ellipse(moon.x, moon.y, moon.size);
    pop();
}

// This makes the moon rises during the night and stops at the top
function moveMoon(phase) {
    if (phase === "night" && moon.y > 100) {
        moon.y = moon.y - 0.8;
    }
}
//this draws my stars
function drawStar(star) {
    push();
    noStroke();
    fill("#ffffff");
    ellipse(star.x, star.y, star.size);
    pop();
}
//This is going to phase the day into "day", "sunset", and "night" 
function getPhase() {
    if (timer < sunsetStart) {
        return "day";
    }
    else if (timer < nightStart) {
        return "sunset";
    }
    else {
        return "night";
    }
}

//this change the color of the sky on the phases
function drawSky(phase) {
    if (phase === "day") {
        background("#8ecae6");
    }
    else if (phase === "sunset") {
        background("#f4a261");
    }
    else {
        background("#0b1d3a");
    }
}

// this is the farmer
function drawFarmer(farmer) {
    push();
    noStroke();

    // Body
    fill("#ce2e53");
    rect(farmer.x - farmer.width / 2, farmer.y - farmer.height, farmer.width, farmer.height * 0.6);

    // Legs
    fill("#12465f");
    rect(farmer.x - farmer.width / 2, farmer.y - farmer.height * 0.4, farmer.width, farmer.height * 0.4);

    // Head
    fill("#cd9371");
    ellipse(farmer.x, farmer.y - farmer.height - 14, 34);

    // Hat
    fill("#f9e59a");
    ellipse(farmer.x, farmer.y - farmer.height - 24, 62, 12);
    ellipse(farmer.x, farmer.y - farmer.height - 30, 32, 20);

    pop();
}


 // Moves the farmer left or right while an arrow key is held down. 
 // He cannot leave the canvas.
 
function moveFarmer(farmer) {
    if (keyIsDown(LEFT_ARROW)) {
        farmer.x = farmer.x - farmer.speed;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        farmer.x = farmer.x + farmer.speed;
    }

    // Left limit
    if (farmer.x < 25) {
        farmer.x = 25;
    }

    // Right limit
    if (farmer.x > 875) {
        farmer.x = 875;
    }
}

//I draw the sunflowers here

function drawSunflower(sunflower) {

let flowerHeadY = sunflower.y - sunflower.stemHeight;

    push();

    // Stem
    stroke("#3f7d3a");
    strokeWeight(7);
    line(sunflower.x, sunflower.y, sunflower.x, flowerHeadY);

    // Petals (4 straight and 4 diagonal)
    noStroke();
    fill("#ffc300");
    ellipse(sunflower.x - sunflower.size / 2, flowerHeadY, sunflower.size / 2);
    ellipse(sunflower.x + sunflower.size / 2, flowerHeadY, sunflower.size / 2);
    ellipse(sunflower.x, flowerHeadY - sunflower.size / 2, sunflower.size / 2);
    ellipse(sunflower.x, flowerHeadY + sunflower.size / 2, sunflower.size / 2);
    ellipse(sunflower.x - sunflower.size / 3, flowerHeadY - sunflower.size / 3, sunflower.size / 2);
    ellipse(sunflower.x + sunflower.size / 3, flowerHeadY - sunflower.size / 3, sunflower.size / 2);
    ellipse(sunflower.x - sunflower.size / 3, flowerHeadY + sunflower.size / 3, sunflower.size / 2);
    ellipse(sunflower.x + sunflower.size / 3, flowerHeadY + sunflower.size / 3, sunflower.size / 2);

    // Center
    fill("#3b260e");
    ellipse(sunflower.x, flowerHeadY, sunflower.size * 0.6);

    pop();


// the flower turns icy blue as the frost goes up
    fill(160, 210, 255, sunflower.frost * 2);
    noStroke();
    ellipse(sunflower.x, flowerHeadY, sunflower.size * 1.6);

    // Cover the sunflower
    if (sunflower.coverTimer > 0) {
        fill("#dfe6f2");
        ellipse(sunflower.x, flowerHeadY, sunflower.size * 1.7, sunflower.size * 1.5);
        fill("#b8c4de");
        ellipse(sunflower.x, flowerHeadY + sunflower.size * 0.6, sunflower.size * 0.5, sunflower.size * 0.3);
    }  
}

// Covers the sunflower if the farmer is close enough to it
function coverSunflower(sunflower, farmer) {
    let distance = dist(farmer.x, farmer.y, sunflower.x, sunflower.y);

    if (distance < 100) {
        sunflower.coverTimer = coverDuration;
    }
}

function updateSunflower(sunflower, phase) {
    if (sunflower.coverTimer > 0) {
        // the cover wears out and the frost goes down
        sunflower.coverTimer = sunflower.coverTimer - 1;

        if (sunflower.frost > 0) {
            sunflower.frost = sunflower.frost - 0.5;
        }
    }
    else if (phase === "night") {
        // the frost goes up
        sunflower.frost = sunflower.frost + sunflower.frostRate;

        if (sunflower.frost >= 100) {
            gameOver = true;
        }
    }
}

//this is a game over if a sunflower freezes
function drawGameOver() {
    push();
    fill("#ff0000");
    textSize(48);
    textAlign(CENTER, CENTER);
    text("A sunflower froze!", 450, 215);
    textSize(24);
    text("Press r to play again", 450, 290);
    pop();
}

// this is when you win the game and your sunflower didnt froze
function drawWin() {
    push();
    fill("#ffffff");
    textFont("Olympia");
    textSize(48);
    textAlign(CENTER, CENTER);
    text("You saved the sunflowers!", 450, 215);
    textFont("Olympia");
    textSize(24);
    text("Press r to play again", 450, 290);
    pop();
}

// This shows the controls at the top left on how to play
function drawInstructions() {
    push();
    fill("#ffffff");
    textSize(18);
    textFont("Olympia");
    textAlign(LEFT, CENTER);
    text("Arrow keys: move    C: cover a sunflower", 20, 30);
    pop();
}

// This runs once every time the key "c" is pressed and the key "r"
function keyPressed() {
    if (key === "c") {
        for (let sunflower of sunflowers) {
            coverSunflower(sunflower, farmer);
        }
    }

    if (key === "r" && (gameOver || gameWon)) {
        restartGame();
    }
}

// Everything starts all over again
function restartGame() {
    timer = 0;
    gameOver = false;
    gameWon = false;
    farmer.x = 450;
    sun.y = 100;
    moon.y = 600;

    for (let sunflower of sunflowers) {
        sunflower.coverTimer = 0;
        sunflower.frost = 0;
    }

    loop();
}