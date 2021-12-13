class Elasticidade{
    constructor(bodyA,bodyB){
      var options = {
          bodyA : bodyA,
          bodyB : bodyB,
          stiffness : 0.04,
          length : 10
      }
      this.fio = Constraint.create(options);
      World.add(world,this.fio);
    }
    display(){
      var corporeoA = this.fio.bodyA.position;
      var corporeoB = this.fio.bodyB.position;
      strokeWeight(4);
      line(corporeoA.x,corporeoA.y,corporeoB.x,corporeoB.y);
    }
}