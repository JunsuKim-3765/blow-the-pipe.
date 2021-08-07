const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ball, blower, blowermouth,button,buttonImg;

function preload(){
//buttonImg=loadImage("blowbutton.jpg");

}

function setup() {
  createCanvas(900,1000);

  frameRate(80);

  engine = Engine.create();
  world = engine.world;
   
  ball = Bodies.circle(250, 150, 25, {restitution:0.9,isStatic:false});
  World.add(world, ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  blower=new Blower(200,500,170,20);

  blowermouth=new Blowermouth(360,435,150,150);

  button=createButton("Click to blow");
  button.position(300,600)
  button.size(50,50);
  button.mouseClicked(blow);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() 
{
  background(51);

  blower.show();
  blowermouth.show();

  ellipse(ball.position.x, ball.position.y, 25)

  Engine.update(engine);
}
function blow(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.1});
}