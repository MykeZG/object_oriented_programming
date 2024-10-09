let posX, posY;
let velX, velY;
let diametro;
let radio;
let fondo;

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
    fondo(random(200, 100), random(25, 100), random(10, 50));
    velX *= -1;
  }
  if (posX < 0 + radio) {
    fondo(random(50, 100), random(25, 100), random(10, 50));
    velX = 1;
  }
  if (posY > height - radio) {
    fondo(random(50, 100), random(25, 100), random(10, 50));
    velY *= -1;
  }
  if (posY < 0 + radio) {
    fondo(random(50, 100), random(25, 100), random(10, 50));
    velY *= -1;
  }
  circle(posX, posY, diametro);
}
