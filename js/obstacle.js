class Obstacle {
    constructor(image) {
        this.image = image 
        this.x = width;
        this.y = (Math.random() * height) / 2.5  
        this.width = 100; 
        this.height = 100; 
    }
    collision(playerInfo) {
        console.log("collision", playerInfo) 
    }
    draw() {
        this.x --
        image(this.image, this.x, this.y, this.width, this.height)
    }
}