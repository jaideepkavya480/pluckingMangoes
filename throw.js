class Throw{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyB,
            pointB : pointB,
            stiffness : 0.01,
            length : 10
        }
        this.pointB = pointB;
        this.throw = constraint.create(options);
        World.add(world,this.throw);
    }

    fly(){
        this.throw.bodyA = null;
    }

    Launch(bodyA){
        this.throw.bodyA = bodyA;
    }



}


