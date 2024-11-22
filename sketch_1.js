let posX, posY;
let velX, velY;
let diametro;
let radio;

function setup() {
  createCanvas(windowWidth, windowHeight);

  radio = ceil(random(10, 50));
  diametro = radio * 2;
  posX = random(radio, width - radio);
  posY = random(radio, height - radio);
  velX = random(-5, 5);
  velY = random(-5, 5);
}

function draw() {
  background(120);
  fill(255);
  noStroke();
  posX += velX;
  posY += velY;

  if (posX > width - radio) {
    velX *= -1;
  }
  if (posX < 0 + radio) {
    velX = 1;
  }
  if (posY > height - radio) {
    velY *= -1;
  }
  if (posY < 0 + radio) {
    velY *= -1;
  }
  circle(posX, posY, diametro);
}
