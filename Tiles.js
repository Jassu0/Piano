class Tiles{
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1           
        }
        this.rain = Bodies.rectangle(x,y,50,70,options)
        this.w = 50;
        this.h = 70;
        World.add(world, this.rain);
        this.color = color(random(0,255),random(0,255),random(0,255))
    }

    updateY(){     
        if(this.rain.position.y > height){

            Matter.Body.setPosition(this.rain, {x:random(50,950), y:0})
        }
    }

    showDrop(){
        fill(this.color)
        rectMode(CENTER);
        rect(this.rain.position.x,this.rain.position.y,this.w,this.h);
    }
}