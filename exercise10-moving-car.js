function car(x, y, rotation) {
  push();
  translate(x, y);
  rotate(rotation);
  fill(188, 47, 99);
  strokeWeight(2);
  rect(-50, -30, 100, 60, 10);
  fill(255);
  rect(15, -20, 20, 40, 6);
  fill(0);
  rect(-35, -35, 20, 10, 6);
  rect(15, -35, 20, 10, 6);
  rect(-35, 25, 20, 10, 6);
  rect(15, 25, 20, 10, 6);
  pop();
}

let x = 80;
let y = 50;
let rotation = 0;
let speed = 0;

function draw() {
  background(158, 148, 152);
  car(x, y, rotation);
  x += Math.cos(rotation) * speed;
  y += Math.sin(rotation) * speed;
  if (keyIsDown(38)) {
    speed = 5;
  } else if (keyIsDown(40)) {
    speed = -5;
  } else {
    speed = 0;
  }
  if (keyIsDown(37)) {
    rotation -= 0.05;
  } else if (keyIsDown(39)) {
    rotation += 0.05;
  }
}
