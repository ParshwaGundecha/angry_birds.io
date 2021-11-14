const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Composite = Matter.Composite;
const Composites = Matter.Composites;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

let engine;
let world;

var ground,playerGround;
var playerBall;
var balls=[];
var slingshot,slingshotImg;
var pyramids;
var backgroundImg;
var mute_btn,unMute_btn;
var line1;
var line2;
var angle

var backgroundSound;

function preload(){
backgroundImg=loadImage("background.jpg");


backgroundSound=loadSound("Angry Birds.mp3");
}

function setup() {
createCanvas(windowWidth,windowHeight);

engine=Engine.create();
world=engine.world;

angleMode(DEGREES);
backgroundSound.loop();

mute_btn=createImg("button1.png");
mute_btn.position(width-70,10);
mute_btn.size(40,40);
mute_btn.mouseClicked(mute);

let options={
  isStatic:true
}

ground=new Ground(width/2,height-90,width,20);
playerGround=new Ground(150,height-150,250,100);
//pyramids=new Obstacles(10);
playerBall=new Ball(180,580);

slingshot=new Cannon(180,580,200,200);

line1=Bodies.rectangle(width-600,399,200,25,options);
World.add(world,line1);
line2=Bodies.rectangle(width-600,544,500,25,options);
World.add(world,line2);
}


function draw() 
{
  background(backgroundImg);
  Engine.update(engine);
  
  ground.show();
  playerGround.show();


  slingshot.show();
  playerBall.display();

  push();
  //rect(line1.position.x,line1.position.y,500,25);
  pop();

  //rect(line2.position.x,line2.position.y,500,25)
  
  playerBall.display();
  
}

function mute(){
if(backgroundSound.isPlaying()){
 backgroundSound.stop();
 unMute_btn=createImg("button2.png");
 unMute_btn.position(width-70,10);
 unMute_btn.size(40,40);
 unMute_btn.mouseClicked(mute)
}
else {
 backgroundSound.loop();
 mute_btn=createImg("button1.png");
 mute_btn.position(width-70,10);
 mute_btn.size(40,40);
 mute_btn.mouseClicked(mute);
}
}

