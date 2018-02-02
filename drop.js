class Drop {
  constructor() {
    this.pos = createVector(random(width), random(-400, -2));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 1);
    this.thickness = random(2);
    this.height = random(2, 5);
  }

  setup() {
    strokeWeight(this.thickness);
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y + this.height);
  }

  update() {
    this.thickness = mouseX / 200;
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.vel.y = constrain(this.vel.y, 0, 10);
    if(this.pos.y > height) {
      this.pos = createVector(random(width), random(-40, -2));
    }
    strokeWeight(this.thickness);
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y + this.height);
  }
}
