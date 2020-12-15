class Bob {
    constructor(x,y,radius) {

      var options = {
          isStatic: false,
          restitution:1,
          friction:0.75,
          density:0.4,
          frictionAir:0            
      }
      this.body = Bodies.circle(x,y,radius,options);
      
      this.x = x;
      this.y = y;

      this.radius =radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     

      
      ellipseMode(CENTER);
      fill("yellow");
      ellipse(pos.x, pos.y, 60,60);
      
    }
  };