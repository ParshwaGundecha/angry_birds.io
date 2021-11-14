class Rope
{
 constructor(link,pointA){
  this.link=link;
  const group=Body.nextGroup(true);
  const rope=Composites.stack(100,100,1,this.link,1,1,function(x,y){
  return Bodies.rectangle(x,y,50,10,{collisionFilter:{group:group}})    
  });
  
  this.pointA=pointA
  this.body=Composites.chain(rope,0,0,0.6,0,{length:10,stiffness:1,render:{type:'line'}})

  World.add(world,this.body);
  Composite.add(rope,Constraint.create({
    pointA:this.pointA,
    bodyB: rope.bodies[0],
    pointB: {x: -25, y: 0},
    length:10,
    stiffness: 1  
  }));
 }
 show()
    {
      if(this.body!=null)
        {
          for (let i = 0; i < this.body.bodies.length; i++)
          {
              this.drawVertices(this.body.bodies[i].vertices);
             }
        }
    }
    
    drawVertices(vertices) 
    {
      beginShape();
      fill('#FFF717')
      noStroke();
      
      for (let i = 0; i < vertices.length; i++) 
      {
       vertex(vertices[i].x, vertices[i].y);
       }
      endShape(CLOSE);
   }
}