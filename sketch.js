const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world


function setup() {
  createCanvas(950,950);
  
 
  engine = Engine.create();
  world = engine.world;
 
  log1 = new Log(390,325,300,40)
  block1 = new Block(280,275,30,40);
 
  block8 = new Block(330,275,30,40);
  block9 = new Block(360,275,30,40);
  block10 = new Block(390,275,30,40);
  block11 = new Block(420,275,30,40);
  block12 = new Block(450,275,30,40);
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block16 = new Block(390,155,30,40);
  
  log2 = new Log(790,155,350,40)
 
  block18 = new Block(730,55,30,40);
  block19= new Block(760,55,30,40);
  block20= new Block(790,55,30,40);
  block21 = new Block(820,55,30,40);
  block17 = new Block(850,55,30,40);

  block24 = new Block(760,25,30,40);
  block25 = new Block(790,25,30,40);
  block26 = new Block(820,25,30,40);
  block27 = new Block(790,5,30,40);
  

  sling=new SlingShot(block1.body,{x:150,y:150})
  Engine.run(engine);
}

function draw() {
  background("skyblue");
  log1.display();
 
  sling.display(); 
 
 
  block17.display(); 
  block18.display();
  block19.display();
  block20.display();
 
  block21.display();
  block24.display();

  block25.display();
  block26.display();
  block27.display();
 
 
  log2.display();
 
  block1.display();
 
  block8.display(); 
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();


  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(block1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  sling.fly();
}
function keyPressed(){
  if(keyCode===32){
 sling.attach(block1.body);
}
}