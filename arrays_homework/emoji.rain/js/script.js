/**
 * Emoji rain
 * Nicolas Robledo Sanchez
 * 
 * I created an emoji rain that everytime you click on the screen, the emoji that
 * fall changes
 */

"use strict";

let emojis = ["🍎", "🌸", "⭐", "🐟", "🍪", "🦋", "🌙","✨","🔥","❤️","🦑"];

let drops = [];

function setup() {
 createCanvas(600, 700);

   for (let i = 0; i < 20; i++) {
        let newDrop = createDrop(random(0, 600), random(-700, 0));
        drops.push(newDrop);
    }
}




function draw() {
 background("skyblue");

for (let drop of drops) {
 drawDrop(drop);
 moveDrop(drop);
}

drawInstructions();
}

function drawDrop(drop) {
    push();
    textSize(drop.size);
    textAlign(CENTER, CENTER);
    text(drop.emoji, drop.x, drop.y);
    pop();
}


function createDrop(x, y) {
    let drop = {
        x: x,
        y: y,
        emoji: random(emojis),
        size: random(25, 60),
        speed: random(1, 4)
    };
    return drop;
}

function moveDrop(drop) {
    drop.y = drop.y + drop.speed;

    if (drop.y > 740) {
        drop.y = -40;
        drop.x = random(0, 600);
    }
}

function mousePressed() {
    let newDrop = createDrop(mouseX, mouseY);
    drops.push(newDrop);
}

function drawInstructions() {
    push();
    noStroke();
    fill("#df173f");
    textSize(40);
    textFont("OLYMPIA");
    textAlign(CENTER, CENTER);
    text("Click to add an emoji", 300, 670);
    pop();
}