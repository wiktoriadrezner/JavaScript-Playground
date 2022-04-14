let lastKeysPressed = [];
function draw() {
  background(255);
  fill("#DDC8AB");
  strokeWeight(4);
  // Light-Beige Placeholders
  stroke("#CBB699");
  ellipse(100, 200, 150);
  ellipse(250, 70, 100);
  ellipse(200, 400, 150);
  ellipse(400, 150, 180);
  ellipse(250, 250, 120);
  // Dark-Beige Placeholders
  fill("#9E8462");
  ellipse(40, 160, 50);
  ellipse(220, 110, 50);
  ellipse(145, 350, 50);
  ellipse(465, 210, 50);
  ellipse(290, 290, 50);
  // Number of the Placeholder
  textSize(25);
  text("1", 32, 167);
  text("2", 213, 118);
  text("3", 138, 359);
  text("4", 458, 218);
  text("5", 283, 298);
  // Last Keys Pressed
  textSize(40);
  textStyle(BOLD);
  strokeWeight();
  fill(0);
  text(lastKeysPressed[0], 90, 210);
  text(lastKeysPressed[1], 240, 80);
  text(lastKeysPressed[2], 190, 410);
  text(lastKeysPressed[3], 390, 160);
  text(lastKeysPressed[4], 240, 260);
}

function keyReleased() {
  lastKeysPressed.unshift(key);
  if (lastKeysPressed.length > 5) {
    lastKeysPressed.pop();
  }
}
