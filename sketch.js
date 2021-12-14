
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftside,rightside;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    ground=new Ground(600,690,1200,20)

    var ball_options={
	  restitution:0.3,
	  density:1.2
	}
	ball=Bodies.circle(100,600,15, ball_options);
	World.add(world,ball);

    leftside=new Ground(800,640,6,80);
	rightside=new Ground(1000,640,6,80);

	Engine.run(engine);



	

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,15,15);

  ground.display();
  leftside.display();
  rightside.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Body.applyForce(ball,ball.position,{x:40,y:-40})
	}
}



