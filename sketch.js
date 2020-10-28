const myEngine = Matter.Engine;
const myWorld = Matter.World;
const myBodies = Matter.Bodies;


var engine, world;
var box1,box2;
var ground1;


function setup() {
  createCanvas(400,400);
  
  engine = myEngine.create();
  world = engine.world;

  box1 = new Box(200,200,30,30);
  box2 = new Box(220,100,30,60);
  ground1 = new ground(200,390,400,20);
}

function draw() {
  background(0);
  myEngine.update(engine);
  
  box1.display();
  box2.display();
  ground1.display();
}