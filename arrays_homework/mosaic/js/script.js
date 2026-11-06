/**
 * Mosaic
 * Nicolas Robledo Sanchez
 * 
 * I created a mosaic of tiles that each time you press a 
 * any key it would change randomly the tiles
 */

"use strict";

let colours = ["#e63946", "#f4a261", "#ffd166", "#2a9d8f", "#457b9d", "#9b5de5","#d832b4"];

let tiles = [

    { x: 0, y: 0, size: 150, colour: "#e63946" },
    { x: 150, y: 0, size: 150, colour: "#ffd166" },
    { x: 300, y: 0, size: 150, colour: "#2a9d8f" },
    { x: 450, y: 0, size: 150, colour: "#9b5de5" },

    { x: 0, y: 150, size: 150, colour: "#457b9d" },
    { x: 150, y: 150, size: 150, colour: "#f4a261" },
    { x: 300, y: 150, size: 150, colour: "#e63946" },
    { x: 450, y: 150, size: 150, colour: "#ffd166" },

    { x: 0, y: 300, size: 150, colour: "#2a9d8f" },
    { x: 150, y: 300, size: 150, colour: "#9b5de5" },
    { x: 300, y: 300, size: 150, colour: "#457b9d" },
    { x: 450, y: 300, size: 150, colour: "#f4a261" },

    { x: 0, y: 450, size: 150, colour: "#e63946" },
    { x: 150, y: 450, size: 150, colour: "#ffd166" },
    { x: 300, y: 450, size: 150, colour: "#2a9d8f" },
    { x: 450, y: 450, size: 150, colour: "#9b5de5" }
];

function setup() {
createCanvas(600, 640);


}



function draw() {
 background("#2c2a2a");

 for (let tile of tiles) {
        drawTile(tile);
    }

    drawInstructions();
}

function drawTile(tile) {
    push();
    stroke("#2c2a2a");
    strokeWeight(4);
    fill(tile.colour);
    rect(tile.x, tile.y, tile.size, tile.size);
    pop();
}

function createTile(x, y) {
    let tile = {
        x: x,
        y: y,
        size: 100,
        colour: random (colours)
    };
    return tile;
}

function changeTileColour(tile) {
    tile.colour = random(colours);
}


function keyPressed() {
    let randomTile = random(tiles);
    changeTileColour(randomTile);
 }

function drawInstructions() {
    push();
    noStroke();
    fill("#f1ecec");
    textSize(30);
    textFont("OLYMPIA")
    textAlign(CENTER, CENTER);
    text("Press any key to change a tile", 300, 620);
    pop();
}