let circleSize = 50;

function mouseClicked() {
  circleSize += 50;
}

function draw() {
  fill(156, 225, 231);
  ellipse(width / 2, height / 2, circleSize);
}
