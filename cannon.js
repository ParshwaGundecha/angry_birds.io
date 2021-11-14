class Cannon
{
 constructor(x,y,w,h){
  let options={
    isStatic:true  
  }
  this.body=Bodies.rectangle(x,y,w,h,options);
  this.w=w;
  this.h=h;
  this.angle=angle;
  this.image=loadImage("canon.png");
  World.add(world,this.body);

  Matter.Body.setAngle(this.body,0);
 }   

 show(){
  angle=this.body.angle;
  console.log(angle);
  if(keyIsDown(RIGHT_ARROW) && angle<39){
   angle+=1;
   Matter.Body.setAngle(this.body,angle);
  }
  if(keyIsDown(LEFT_ARROW) && angle>-35){
   angle-=1;   
   Matter.Body.setAngle(this.body,angle);
  }
  push();
  translate(this.body.position.x,this.body.position.y);
  rotate(angle);
  imageMode(CENTER);
  image(this.image,0,0,this.w,this.h);   
  pop();
 }

}