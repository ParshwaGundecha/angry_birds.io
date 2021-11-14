class Ground
{
 constructor(x,y,w,h){
 let ground_options={
   isStatic:true  
 }; 
 this.body = Bodies.rectangle(x,y,w,h,ground_options)
 this.w=w;
 this.h=h;
 World.add(world,this.body);
 }   

 show(){
  push();
  fill(228, 19, 19); 
  rectMode(CENTER);
  rect(this.body.position.x,this.body.position.y,this.w,this.h);
  pop();   
 }
}