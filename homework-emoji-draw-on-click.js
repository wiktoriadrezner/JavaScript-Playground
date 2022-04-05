function emojiBear(x, y, s) {
  s = 0.3;

  // Ears (Large)
  fill("#855C52");
  stroke("#855C52");
  ellipse(x - 100 * s, y - 100 * s, 110 * s);
  ellipse(x + 100 * s, y - 100 * s, 110 * s);

  // Ears (Medium)
  fill("#B7937A");
  stroke("#B7937A");
  ellipse(x - 100 * s, y - 100 * s, 90 * s);
  ellipse(x + 100 * s, y - 100 * s, 90 * s);

  // Ears (Small)
  fill("#7D695C");
  stroke("#7D695C");
  ellipse(x - 110 * s, y - 100 * s, 40 * s);
  ellipse(x + 110 * s, y - 100 * s, 40 * s);

  // Body
  fill("#855C52");
  stroke("#855C52");
  ellipse(x, y, 300 * s);

  // Eyebrows
  fill("#8B7263");
  stroke("#8B7263");
  ellipse(x - 80 * s, y - 40 * s, 75 * s);
  ellipse(x + 80 * s, y - 40 * s, 75 * s);

  fill("#855C52");
  stroke("#855C52");
  ellipse(x - 80 * s, y - 23 * s, 100 * s);
  ellipse(x + 80 * s, y - 23 * s, 100 * s);

  // Light Brown Body
  fill("#B7937A");
  stroke("#B7937A");
  ellipse(x, y + 45 * s, 165 * s);

  // Eyes (Large)
  fill("#484D51");
  stroke("#484D51");
  ellipse(x - 80 * s, y - 20 * s, 80 * s);
  ellipse(x + 80 * s, y - 20 * s, 80 * s);

  // Eyes (Medium)
  fill("#7B8084");
  ellipse(x - 70 * s, y - 5 * s, 35 * s);
  ellipse(x + 90 * s, y - 5 * s, 35 * s);

  // Eyes (Small)
  fill(255);
  stroke(255);
  ellipse(x - 57 * s, y - 13 * s, 10 * s);
  ellipse(x + 103 * s, y - 13 * s, 10 * s);

  // Tongue
  fill("#992462");
  stroke("#992462");
  rect(x - 15 * s, y + 18 * s, 30 * s, 90 * s, 30 * s);

  stroke("#B7937A");
  strokeWeight(67 * s);
  line(x, y + 40 * s, x + 25 * s, y + 55 * s);
  line(x, y + 40 * s, x - 25 * s, y + 55 * s);
  line(x - 45 * s, y + 70 * s, x - 25 * s, y + 55 * s);
  line(x + 25 * s, y + 55 * s, x + 45 * s, y + 70 * s);

  // Nose and Mouth
  fill("#484D51");
  stroke("#484D51");
  strokeWeight();
  triangle(x - 20 * s, y + 30 * s, x + 20 * s, y + 30 * s, x, y + 60 * s);
  strokeWeight(5 * s);
  line(x - 20 * s, y + 30 * s, x + 20 * s, y + 30 * s);
  line(x - 20 * s, y + 30 * s, x, y + 60 * s);
  line(x + 20 * s, y + 30 * s, x, y + 60 * s);
  line(x, y + 50 * s, x, y + 80 * s);
  line(x, y + 80 * s, x + 25 * s, y + 95 * s);
  line(x, y + 80 * s, x - 25 * s, y + 95 * s);
  line(x - 45 * s, y + 85 * s, x - 25 * s, y + 95 * s);
  line(x + 25 * s, y + 95 * s, x + 45 * s, y + 85 * s);
}

function mouseClicked() {
  emojiBear(mouseX, mouseY);
}
