let lastX = 0;
let lastY = 0;

function mouseClicked() {
  strokeWeight(8);
  stroke((mouseY / height) * 255, 0, (mouseX / width) * 255);
  line(lastX, lastY, mouseX, mouseY);
  lastX = mouseX;
  lastY = mouseY;
}
