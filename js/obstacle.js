class Obstacle {
    constructor(image) {
        this.image = image 
        this.x = width;
        this.y = (Math.random() * height) / 2.5  
        this.width = 60; 
        this.height = 80; 
    }
    collision(playerInfo) {
        // console.log("collision", playerInfo) 
        // get the middle of the player 
        const playerX = playerInfo.x + playerInfo.width / 2 
        const playerY = playerInfo.y + playerInfo.height / 2 
        // get the middlle of the obstacle 
        const obstacleX = this.x + this.width / 2
        const obstacleY = this.y + this.height / 2 
        // measure the distance between obstacle and player 
        if (dist(obstacleX, obstacleY, playerX, playerY) > 25){
            // this is not a collision 
            return false 
        } else {
            // 
            // game.player.score += 10; 
            // console.log(game.player.score)
            return true 
        }
    }
    draw() {
        this.x --
        image(this.image, this.x, this.y, this.width, this.height)
    }
}