class Chain{
    constructor(mybodyA,mybodyB){
        var option= {
bodyA:mybodyA,
bodyB:mybodyB,
length:10,
stiffness:0.04
        }
        this.chain=Constraint.create(option);
        World.add(world,this.chain);
    }
    display(){
        strokeWeight(3);
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
    }
}
