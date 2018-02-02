let droplets = [];
const dropQty = 200;

function setup() {
  createCanvas(720, 400);
  for(let i = 0; i < dropQty; i++) {
    droplets.push(new Drop());
  }
}

function draw() {
  background(30);
  stroke(255);

  for(let droplet of droplets) {
    droplet.update();
  }
}
