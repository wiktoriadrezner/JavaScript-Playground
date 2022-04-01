function center(position, size) {
  return size / 2 + position;
}

const width = 300;
const height = 300;

fill(255);
rect(150, 100, width, height);

const x = center(150, width);
const y = center(100, height);

fill(0);
ellipse(x, y, 100);
