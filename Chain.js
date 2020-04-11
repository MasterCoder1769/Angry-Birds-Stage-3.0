 class Chain 
 {
     //We added a constructor
     constructor(bodyA,bodyB)
     {
         var options = {
             bodyA:bodyA,
             bodyB:bodyB,
             stiffness : 0.04,
             length : 10

         }
         //We created a Constraint and adeed it to World
         this.chain = Constraint.create(options);
         World.add(world,this.chain);
     }
 display()
{
    //We positioned the chain
var pointA = this.chain.bodyA.position;
var pointB = this.chain.bodyB.position;
strokeWeight(4);
line(pointA.x,pointA.y,pointB.x,pointB.y);
}
     
 }