let middleX = canvas.width / 2;
let middleY = canvas.height / 2;
let circleSize = 180;

let color1 = color(156, 225, 231);
let color2 = color(69, 107, 110);
let color3 = color(23, 195, 210);
let color4 = color(162, 191, 194);

background(255);

function draw() {
  strokeWeight(3);
  stroke(0);
  line(middleX, 0, middleX, canvas.height);
  line(0, middleY, canvas.width, middleY);
  strokeWeight();

  fill(color1);
  ellipse(middleX / 2, middleY / 2, circleSize);
  if (mouseX < middleX && mouseY < middleY) {
    color1 = color(156, 225, 231);
  } else {
    color1 = color(255);
  }

  fill(color2);
  ellipse(middleX / 2, middleY * 1.5, circleSize);
  if (mouseX < middleX && mouseY > middleY) {
    color2 = color(69, 107, 110);
  } else {
    color2 = color(255);
  }

  fill(color3);
  ellipse(middleX * 1.5, middleY / 2, circleSize);
  if (mouseX > middleX && mouseY < middleY) {
    color3 = color(23, 195, 210);
  } else {
    color3 = color(255);
  }

  fill(color4);
  ellipse(middleX * 1.5, middleY * 1.5, circleSize);
  if (mouseX > middleX && mouseY > middleY) {
    color4 = color(162, 191, 194);
  } else {
    color4 = color(255);
  }
}
