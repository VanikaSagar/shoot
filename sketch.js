const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundimg

function preload(){
  backgroundimg=loadImage("backgroundimg.jpg")
}


function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(1500,700);

  plane=new fighterplane(600,600,50,60)
  
}

function draw() {
  background(backgroundimg);  
  Engine.update(engine);

  plane.display()
  drawSprites();
}