class Background {
    // 1.0 create draw function
    draw() { 
        // console.log("this is the background drawing!") 
        // image(game.backgroundImages[0].src, 0, 0, width, height)
        game.backgroundImages.forEach(function(img){
            img.x -= img.speed 
            image(img.src, img.x, 0, width, height)
            image(img.src, img.x + width, 0, width, height) 
            if(img.x <= - width){
                img.x = 0
            } 
        })
    }
}