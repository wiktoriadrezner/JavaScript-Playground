let lastX = 0;
let lastY = 0;
let ifDrawing = false;

background(255);

function draw() {
  strokeWeight(6);
  stroke((mouseY / height) * 255, 100, (mouseX / width) * 255);
  if (mouseIsPressed) {
    if (ifDrawing) {
      line(mouseX, mouseY, lastX, lastY);
    }
    lastX = mouseX;
    lastY = mouseY;
    ifDrawing = true;
  } else {
    ifDrawing = false;
  }
}
