angleMode(DEGREES);
background(255, 255, 255);

push();
scale(1.1);

// Ears (Large)
fill("#855C52");
stroke("#855C52");
push();
scale(0.8);
ellipse(100, 100, 110);
pop();
push();
scale(1.2);
ellipse(300, 100, 110);
pop();

// Ears (Medium)
fill("#B7937A");
stroke("#B7937A");
push();
scale(0.8);
ellipse(100, 100, 90);
pop();
push();
scale(1.2);
ellipse(300, 100, 90);
pop();

// Ears (Small)
fill("#7D695C");
stroke("#7D695C");
push();
scale(0.8);
ellipse(90, 100, 40);
pop();
push();
scale(1.2);
ellipse(310, 100, 40);
pop();

// Body
fill("#855C52");
stroke("#855C52");
ellipse(200, 200, 300);

// Eyebrows
fill("#8B7263");
stroke("#8B7263");
ellipse(120, 160, 75);
ellipse(280, 160, 75);

fill("#855C52");
stroke("#855C52");
ellipse(120, 177, 100);
ellipse(280, 177, 100);

//Light Brown Body
fill("#B7937A");
stroke("#B7937A");
ellipse(200, 245, 165);

// Eyes (Large)
fill("#484D51");
stroke("#484D51");
push();
rotate(15);
ellipse(120, 180, 80);
pop();
ellipse(280, 180, 80);

// Eyes (Medium)
fill("#7B8084");
push();
rotate(15);
ellipse(130, 195, 35);
pop();
ellipse(290, 195, 35);

// Eyes (Small)
fill(255);
stroke(255);
push();
rotate(15);
ellipse(143, 187, 10);
pop();
ellipse(303, 187, 10);

push();
translate(400, 500);
rotate(180);
// Tongue
fill("#992462");
stroke("#992462");
rect(185, 220, 30, 90, 30);

stroke("#B7937A");
strokeWeight(65);
line(200, 240, 225, 255);
line(200, 240, 175, 255);
line(155, 245, 175, 255);
line(225, 255, 245, 245);

// Nose and Mouth
fill("#484D51");
stroke("#484D51");
strokeWeight();
triangle(180, 230, 220, 230, 200, 260);
strokeWeight(5);
line(180, 230, 220, 230);
line(180, 230, 200, 260);
line(220, 230, 200, 260);
line(200, 250, 200, 280);
line(200, 280, 225, 295);
line(200, 280, 175, 295);
line(155, 285, 175, 295);
line(225, 295, 245, 285);
pop();
pop();
