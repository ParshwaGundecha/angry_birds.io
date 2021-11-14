class Obstacles
  {
   constructor(pointA){
   //this.column=column;
   this.pointA=pointA;
   const group=Body.nextGroup(true);
   const rects=Composites.stack(300,300,11,4,10,10,function(){
   return Bodies.rectangle(300,300,30,30,{collisionFilter:{group:group}})  
   });

   this.body=Composites.chain(rects,0.1,0,0.6,0,{length:10,render:{type:'line'}});

   Composite.add(rects,Constraint.create({
    pointA:this.pointA,
    bodyB: rects.bodies[0],
    pointB: {x: -25, y: 0},
    length:10,
    stiffness: 1 
   }));
   }
    
    
    show()
    {
      if(this.body!=null)
        { for (let i = 0; i < this.body.bodies.length; i++)
          {
              this.drawVertices(this.body.bodies[i].vertices);
             }
        }
    }
  
    
    drawVertices(vertices) 
    {
      beginShape();
      fill('#a52a2a');
      noStroke();
      
      for (let i = 0; i < vertices.length; i++) 
      {
       vertex(vertices[i].x, vertices[i].y);
       }
      endShape(CLOSE);   
   }
  }