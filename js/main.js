const game = new Game(); 

function preload() {
    game.preload()
}

function setup() {
    createCanvas(1000, 600)
    game.setup() 
}

function draw() {
    game.draw()
}

function keyPressed() {
    if(keyCode === 32){ 
        // mkae the player jump 
        game.player.jump() 
    }
}