let middleX = canvas.width / 2;
let middleY = canvas.height / 2;

let area1 = middleX - 100;
let area2 = middleX + 100;
let area3 = middleY - 40;
let area4 = middleY + 40;

let color1 = color(200, 135, 170);
let color2 = color(113, 70, 93);
let buttonState = false;

function button(x, y, w, h) {
  fill(255);
  strokeWeight(3);
  rect(x, y, w, h);

  fill(0);
  textSize(20);
  textStyle(BOLD);
  text("CLICK ME", middleX - 49, middleY + 8);
}

function draw() {
  if (buttonState) {
    background(color2);
  } else {
    background(color1);
  }
  button(middleX - 100, middleY - 40, 200, 80);
}

function mousePressed() {
  if (mouseX > area1 && mouseX < area2 && mouseY > area3 && mouseY < area4) {
    buttonState = true;
  }
}

function mouseReleased() {
  buttonState = false;
}
