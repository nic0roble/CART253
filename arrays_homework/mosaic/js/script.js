/**
 * Mosaic
 * Nicolas Robledo Sanchez
 * 
 * I created a mosaic of tiles that each time you press a 
 * any key it would change randomly the tiles
 */

"use strict";

let colours = ["#e63946", "#f4a261", "#ffd166", "#2a9d8f", "#457b9d", "#9b5de5","#d832b4"];

let tiles = [];

function setup() {
createCanvas(600, 640);
}



function draw() {
 background("#2c2a2a");
}

function drawTile(tile) {
    push();
    stroke("#2c2a2a");
    strokeWeight(4);
    fill(colours[tile.colourIndex]);
    rect(tile.x, tile.y, tile.size, tile.size);
    pop();
}