//namespacing

const Engine =Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var object;
var ball;
var ground;
function setup(){
   var canvas = createCanvas(600,600);
   engine= Engine.create();
   world=engine.world;

   var object_options = {
     isStatic: true
   }
   
   var ball_options={
     restitution:1.0
   }
   
   
   /*

   
   var ground_options = {
    isStatic: true
  }
  */
//object created
  // object=Bodies.rectangle(200,100,50,50,object_options);
   ground=Bodies.rectangle(200,390,200,20,object_options);
   ball=Bodies.circle(200,100,20,ball_options);
   //adding object to the world
  // World.add(world,object);
   World.add(world,ground);
   World.add(world,ball);
  // console.log(object);
  // console.log(object.position);
  // console.log(object.position.x);
  // console.log(object.position.y);
 }

 function draw(){
   background(0);
   Engine.update(engine);
   rectMode(CENTER);
  // rect(object.position.x,object.position.y,50,50);
   rect(ground.position.x,ground.position.y,400,20);
   ellipseMode(RADIUS);
   ellipse(ball.position.x,ball.position.y,20);

  
 }

 









 