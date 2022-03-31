function emojiBear(x, y) {
  // Ears (Large)
  fill("#855C52");
  stroke("#855C52");
  ellipse(x - 100, y - 100, 110);
  ellipse(x + 100, y - 100, 110);

  // Ears (Medium)
  fill("#B7937A");
  stroke("#B7937A");
  ellipse(x - 100, y - 100, 90);
  ellipse(x + 100, y - 100, 90);

  // Ears (Small)
  fill("#7D695C");
  stroke("#7D695C");
  ellipse(x - 110, y - 100, 40);
  ellipse(x + 110, y - 100, 40);

  // Body
  fill("#855C52");
  stroke("#855C52");
  ellipse(x, y, 300);

  // Eyebrows
  fill("#8B7263");
  stroke("#8B7263");
  ellipse(x - 80, y - 40, 75);
  ellipse(x + 80, y - 40, 75);

  fill("#855C52");
  stroke("#855C52");
  ellipse(x - 80, y - 23, 100);
  ellipse(x + 80, y - 23, 100);

  //Light Brown Body
  fill("#B7937A");
  stroke("#B7937A");
  ellipse(x, y + 45, 165);

  // Eyes (Large)
  fill("#484D51");
  stroke("#484D51");
  ellipse(x - 80, y - 20, 80);
  ellipse(x + 80, y - 20, 80);

  // Eyes (Medium)
  fill("#7B8084");
  ellipse(x - 70, y - 5, 35);
  ellipse(x + 90, y - 5, 35);

  // Eyes (Small)
  fill(255);
  stroke(255);
  ellipse(x - 57, y - 13, 10);
  ellipse(x + 103, y - 13, 10);

  // Tongue
  fill("#992462");
  stroke("#992462");
  rect(x - 15, y + 20, 30, 90, 30);

  stroke("#B7937A");
  strokeWeight(65);
  line(x, y + 40, x + 25, y + 55);
  line(x, y + 40, x - 25, y + 55);
  line(x - 45, y + 45, x - 25, y + 55);
  line(x + 25, y + 55, x + 45, y + 45);

  // Nose and Mouth
  fill("#484D51");
  stroke("#484D51");
  strokeWeight();
  triangle(x - 20, y + 30, x + 20, y + 30, x, y + 60);
  strokeWeight(5);
  line(x - 20, y + 30, x + 20, y + 30);
  line(x - 20, y + 30, x, y + 60);
  line(x + 20, y + 30, x, y + 60);
  line(x, y + 50, x, y + 80);
  line(x, y + 80, x + 25, y + 95);
  line(x, y + 80, x - 25, y + 95);
  line(x - 45, y + 85, x - 25, y + 95);
  line(x + 25, y + 95, x + 45, y + 85);
}

background(255);

push();
scale(0.5);
emojiBear(320, 280);
emojiBear(800, 280);
emojiBear(320, 750);
emojiBear(800, 750);
pop();
