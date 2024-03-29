let starX = [];
let starY = [];
let starAlpha = [];

for (let i = 0; i < 300; i++) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const alpha = Math.random();

  starX.push(x);
  starY.push(y);
  starAlpha.push(alpha);
}

function draw() {
  noStroke();
  background(0);

  for (let index in starX) {
    fill(255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 3);
    starAlpha[index] += 0.02;
  }
}
