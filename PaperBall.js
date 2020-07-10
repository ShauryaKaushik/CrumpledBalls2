class PaperBall{
  constructor(x, y,radius) {
      var options = {
          "isStatic" : true,
          'restitution':1.5,
          'friction':0.5,
          'density':1.5
      }
      this.body = Bodies.circle(x, y,radius);
      this.width = width;
      this.height = height;
      this.image = loadImage("paperBall.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);  
      image(this.image,0,0,this.width,this.height);
      pop();
    }
}
