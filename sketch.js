const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobDiameter=40;

function preload()
{
	
}

function setup() {
	createCanvas(700, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(260,400,bobDiameter);
	bobObject2 = new Bob(300,400,bobDiameter);
	bobObject3 = new Bob(340,400,bobDiameter);
	bobObject4 = new Bob(380,400,bobDiameter);
	bobObject5 = new Bob(420,400,bobDiameter);

	roofObject = new Roof(340,180,250,50);
	
	rope1 = new Rope(bobObject1.body , roofObject.body , -bobDiameter*2,0);
	rope2 = new Rope(bobObject2.body , roofObject.body , -bobDiameter*2+40,0);
	rope3 = new Rope(bobObject3.body , roofObject.body , -bobDiameter*2+80,0);
	rope4 = new Rope(bobObject4.body , roofObject.body , -bobDiameter*2+120,0);
	rope5 = new Rope(bobObject5.body , roofObject.body , -bobDiameter*2+160,0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 }

 function keyPressed(){
	if (keyCode === UP_ARROW){
		Body.applyForce(bobObject1.body , bobObject1.body.position,{x:-50,y:-45});
	}
}
