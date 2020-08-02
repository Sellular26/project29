const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    ball = new Ball(300, 400, 70, 70);
    sling = new SlingShot(ball.body, {x: 200, y:300});
    ground = new Ground(600, 400, 400, 20);

    //bottom layer
    box1 = new Box1(600, 370, 50, 50);
    box2 = new Box1(625, 370, 50, 50);
    box3 = new Box1(575, 370, 50, 50);
    box4 = new Box1(550, 370, 50, 50);
    box5 = new Box1(650, 370, 50, 50);
    box6 = new Box1(525, 370, 50, 50);
    box7 = new Box1(675, 370, 50, 50);

    //2nd layer
    box8 = new Box2(600, 345, 50, 50);
    box9 = new Box2(625, 345, 50, 50);
    box10 = new Box2(575, 345, 50, 50);
    box11 = new Box2(550, 345, 50, 50);
    box12 = new Box2(650, 345, 50, 50);

    //3rd layer
    box13 = new Box2(600, 320, 50, 50);
    box14 = new Box2(550, 320, 50, 50);
    box15 = new Box2(650, 320, 50, 50);

    //top
    box16 = new Box3(600, 295, 50, 50);

}

function draw() {
  background(190);  

  Engine.update(engine)

  ball.display();
  sling.display();
  ground.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}