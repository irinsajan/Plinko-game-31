class Division{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,10,300,{isStatic:true});
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x,pos.y,10,300);
    }    
}