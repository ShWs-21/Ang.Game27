class Chain{

constructor (bodyA,bodyB) {
    
var options = {
    bodyA:bird.body,
    bodyB:constraintLog.body,
    length:10,
    stiffness:0.4
}

    this.chain=Constraint.create(options);
    World.add(world,this.chain);
}



display()
{ 
    push();
     strokeWeight(10);
     line(bird.body.position.x,bird.body.position.y,constraintLog.body.position.x,constraintLog.body.position.y);
pop();
}

}
