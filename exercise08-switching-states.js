let xMiddle = canvas.width / 2;
let yMiddle = canvas.height / 2;
let x = 25;

textSize(75);
textStyle(ITALIC);

function screen1() {
  background(228, 214, 189);
  text("Start", x, yMiddle);
}

function screen2() {
  background(189, 195, 228);
  text("Game", x, yMiddle);
}

function screen3() {
  background(228, 189, 210);
  text("Results", x, yMiddle);
}

let state = "start";
let gameTime = 0;

function draw() {
  if (state === "start") {
    screen1();
  } else if (state === "game") {
    screen2();
    gameTime += 1;
    if (gameTime >= 100) {
      gameTime = 0;
      state = "results";
    }
  } else if (state === "results") {
    screen3();
  }
}

function mouseClicked() {
  if (state === "start") {
    state = "game";
  } else if (state === "results") {
    state = "game";
  }
}
