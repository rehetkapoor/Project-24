class paper{
    constructor(x, y) {

        this.body = Bodies.circle(x, y, 30);
        World.add(world, this.body);
      }
      display(){
        push();
        ellipseMode(CENTER);
        fill("white")
        translate(this.body.position.x, this.body.position.y)
        ellipse(0, 0, 30, 30);
        pop();
      }
}
