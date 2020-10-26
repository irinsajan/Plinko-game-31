class Particle{
    constructor(x,y){
        this.body = Bodies.circle(x,y,10,{restitution: 0.4});
        World.add(world,this.body);
        this.color = color(random(0,255),random(0,255),random(0,255));
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,10,10);
        pop();
    }
}