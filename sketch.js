const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var ground;
var divisions = [];
var plinkos = [];
var particles = [];

var engine, world;


function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height-5,width,10);

  for(k=0; k<=width; k=k+80){
    divisions.push(new Division(k,height-150));
  }

  for(var j=40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j=15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  for(var j=40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,275));
  }

  for(var j=15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,375));
  }

  
}

function draw() {
  background(0);

  Engine.update(engine);

  ground.display();

  for(var k=0; k<divisions.length; k++){
    divisions[k].display();
  }

  for(var k=0; k<plinkos.length; k++){
    plinkos[k].display();
  }

  if (frameCount%60 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),10));
  }
  
  for(var k=0; k<particles.length; k++){
    particles[k].display();
  }


}

