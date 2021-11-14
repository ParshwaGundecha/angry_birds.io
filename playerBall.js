class Ball
{
  constructor(x,y){
    let options={
      isStatic:true
    }
    this.r=30;
   this.body=Bodies.circle(x,y,this.r,options);
   
   this.image=loadImage("cannonball.png");
   World.add(world,this.body);
  }

  display(){
    var posx=this.body.position.x;
    var posy=this.body.position.y;
    push();
    translate(posx,posy);
    image(this.image,0,0,this.r,this.r);
    pop();
  }
}