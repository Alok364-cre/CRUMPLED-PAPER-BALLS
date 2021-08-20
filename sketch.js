
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ball;
var ground;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(width/2,670,width,20);
    ball=new Paper(100,600,10);
	leftSide = new Ground(550,600,20,120);
	rightSide=new Ground(700,600,20,120);

	Engine.run(engine);


}

function draw() {
  background(0);

  rectMode(CENTER);

 ground.show();
  ball.show();
  leftSide.show();
 rightSide.show();
 
  //Engine.update(engine);
  drawSprites();
}

function keypressed(){
	//if(keyCode===UP_ARROW){
	//Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 15,y: -15})
//}
}
function keyPressed(){
    if (keyCode === UP_ARROW ) {
      Matter.Body.applyForce(ball.body, ball.body.position, {x: 15,y: -15})
    }
  }