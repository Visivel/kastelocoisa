const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var angle
var tower;
var background_img;

function preload() {
    background_img = loadImage("assets/background.gif");
    tower = loadImage("assets/tower.png");
}

function setup() {
  createCanvas(1900,1000);

  engine = Engine.create();
  world = engine.world;
  angle = -PI/4
  cannon = new Cannon(180,110,100,50,angle);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  image(background_img, 0,0, width, height);
  push();
  imageMode(CENTER);  
  image(tower, 250,700,160,310);
  pop();
  cannon.display();
}