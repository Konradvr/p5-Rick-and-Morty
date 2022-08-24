class Game {
    setup() {
        this.player = new Player() 
        this.background = new Background() 
        this.obstacles = []
    }
    constructor() {
        this.backgroundImages 
        this.coinImage
    }
    preload() {
        this.backgroundImages = [
            {src: loadImage("..//assents/background/Meteor.png"), x: 0, speed: 3}
    ],
        this.playerImage = loadImage("../assents/player/Rick.gif"),
        this.coinImage = loadImage("../assents/coin/emma.png")
    }
    // 1.1 create draw function 
    draw() {
        // console.log("game drawing") 
        clear() 
        // img is not displayed but it is moving out of the canvas 
        // STEPS we need after the first img a second img 
        this.background.draw() // see the console.log from background.js 
        this.player.draw()
        // here we add cois to the obstacles array 
        // frameCount - this is provides by p5 
        if(frameCount % 180 === 0){
            this.obstacles.push(new Obstacle(this.coinImage))
            // creating new obsticale and pushing it in the array 
            //  console.log("new Coin")
            console.log(this.obstacles)
        }
        // iterate over the obstales array and call the draw function for every obstacle inside 
        // loop 
        this.obstacles.forEach(function(obstacle){
            obstacle.draw() 
        })
        // // that uu collect the coins 
        // this.obstacles = this.obstacles.filter(function(){
        //     obstacle.collision(this.player)
        // })
    }
}