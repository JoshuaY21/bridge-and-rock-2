class Stone {

    constructor(x,y) {
        

        var options = {

            restitution: 0.1,
            density: 0.00000000000000001,

        }

        this.r = 30
        this.x = x
        this.y = y
        this.body = Bodies.circle(x,y,this.r,options)
        
        World.add(world,this.body)
        
        this.image = loadImage("stone.png")
    }

    show() {
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,60,60)
    }


}