class Player {
    constructor() {
        this.velocity = 0;
        this.gravity = 0.2; 
        this.width = 200; 
        this.height = 250;
        this.x = 70;
        this.y = 250; 
        this.y = height - this.height;
    }
    draw() {
        // this pushes the plyer down
        this.velocity += this.gravity
        this.y += this.velocity 
        // if bb8 moves lower than the bottom of the canvas we need to correct his position 
        if(this.y >= height - this.height){
        // reset to his starting position 
        this.y = height - this.height;
        }
        image(game.playerImage, this.x, this.y, this.width, this.height ) 
    }
    jump() {
        console.log("jump!")
        // how can he jump ? need to change the y 
        this.velocity = -10
        // -> use velorcity now 
        // -10 weil es ja im negative bereich auf der y und x achse ist !! hab das letztes mal nicht bemerkt 
        // so how can he get on the ground again? 
    }
}