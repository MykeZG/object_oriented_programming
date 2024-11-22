let particulas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(50);
  let nuevaParticula = new Particula(mouseX, mouseY);
  particulas.push(nuevaParticula);
  for (let i = 0; i < particulas.length; i++) {
    particulas[i].update();
    particulas[i].display();
  }
  /*
  Esta es una forma de borrar las partículas muertas utilizando un for loop que navega todas las particulas y se pregunta por la variable boleana estaViva
  Utiliza la función slipice para borra la partícula específica mediante su índice
  */

  // for (let i = 0; i < particulas.length; i++) {
  //   if (!particulas[i].estaViva) {
  //     particulas.splice(i, 1);
  //   }
  // }

  particulas = particulas.filter((pelota) => pelota.estaViva);

  noFill();
  stroke(252, 99, 145);
  strokeWeight(1);

  for (let i = 0; i < particulas.length - 1; i++) {
    line(
      particulas[i].posx,
      particulas[i].posy,
      particulas[i + 1].posx,
      particulas[i + 1].posy
    );
  }
  console.log(particulas.length);
}
