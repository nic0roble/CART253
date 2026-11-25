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

// The sun
const sun = {
    x: 780,
    y: 100,
    size: 110
};

// The moon
const moon = {
    x: 780,
    y: 100,
    size: 80
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
    { x: 130, y: 500, stemHeight: 130, size: 65 },
    { x: 290, y: 500, stemHeight: 150, size: 70 },
    { x: 450, y: 500, stemHeight: 120, size: 65 },
    { x: 610, y: 500, stemHeight: 145, size: 70 },
    { x: 770, y: 500, stemHeight: 135, size: 65 }
];


function setup() {
createCanvas(900, 600);
}



function draw() {
background("#8ecae6");
timer = timer + 1;
  let phase = getPhase();
  
  drawGround(phase);

if (phase === "night") {
    drawMoon();
}

drawSun();
drawSky(phase);

  drawFarmer(farmer);
  moveFarmer(farmer);

  for (let sunflower of sunflowers) {
        drawSunflower(sunflower);
    }


}

function drawGround() {
    push();
    noStroke();
    fill("#6b8f3a");
    rect(0, 480, 900, 120);
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
        sun.y = sun.y + 0.6;
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