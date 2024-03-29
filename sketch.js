const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

//my engine and my world
var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);


  engine = Engine.create()
  world = engine.world
  var ground_options = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,390,40,20,ground_options)
  World.add(world,ground)
  var ball_options = {
    restitution : 1.0
  }
  ball = Bodies.circle(200,200,10,ball_options)
  World.add(world,ball)

  console.log(ground)
}

function draw() {
  background(0);
  Engine.update(engine)
  
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,10,10)
}
