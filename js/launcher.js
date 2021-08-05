class launcher{
      constructor(bodyA,pointB){
var options = {bodyA:bodyA,
               pointB:pointB,
               stiffness:0.05,
               length:50}
this.bodyA = bodyA;
this.pointB = pointB;
this.launch1 = Constraint.create(options);                       
World.add(world,this.launch1);
}

fly(){
this.launch1.bodyA = null;      
}

attach(body){
this.launch1.bodyA = body;
}
    
    display(){

if(this.launch1.bodyA){

var pointA = this.bodyA.position;
var pointB = this.pointB;

strokeWeight(2);
line(pointA.x, pointA.y, pointB.x, pointB.y);
}

}
}