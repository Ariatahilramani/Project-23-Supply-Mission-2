var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1;
var box2;
var box3;




function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;


	engine = Engine.create();
	world = engine.world;
	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {friction:1, isStatic:true,});
	World.add(world, packageBody);
	

	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	box1= new Box(380,650,180,20);
	box2= new Box(280,590,20,140);
	box3= new Box(480,590,20,140);
	 
	 
	


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);



  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y;



	ellipse(packageBody.position.x,packageBody.position.y,50,50);
	rect(ground.position.x,ground.position.y, 800,20);
	
box1.display();
box2.display();
box3.display();
  

  

  drawSprites();
 
}

function keyPressed(){
 if (keyCode === DOWN_ARROW) {

	Matter.Body.setStatic(packageBody, false);
	 
	}
}
   




