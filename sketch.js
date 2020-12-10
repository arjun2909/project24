
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustBinObject, paper,ground	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustBinObject =new DustBin(1200,650);
	paper=new Paper(200,450,40);
	ground=new Ground(width/2,670,width,20);
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	 
	  }
	}
	)

	Engine.run(engine);
}


function draw() {
	keyPressed();
  rectMode(CENTER);
  background(0);
 
  dustBinObject.display();
  paper.display();
  ground.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW ) {

    	Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-5});
    
  	}
}
