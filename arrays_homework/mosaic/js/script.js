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

for (let row = 0; row < 6; row++) {
        for (let column = 0; column < 6; column++) {
            let newTile = createTile(column * 100, row * 100);
            tiles.push(newTile);
        }
    }

}



function draw() {
 background("#2c2a2a");

 for (let tile of tiles) {
        drawTile(tile);
    }

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
