const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body

var groundSprite, b1, b2, b3
var p1;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	p1 = new paper(100, 600);
	
	groundSprite= new Ground(width/2, height-35, width, 40);

	b1 =new box(550, height-105, 20, 100)
	b2 =new box(660, height-65, 200, 20)
	b3 =new box(750, height-105, 20, 100)

	Engine.run(engine);
}


function draw(){
  background(0);
  Engine.update(engine)
  groundSprite.display();
  b1.display();
  b2.display();
  b3.display();
  p1.display();
}

function keyPressed (){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(p1.body, p1.body.position, {x:130, y:-130})
	}
}