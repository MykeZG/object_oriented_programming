class Particula {
  // este método se ejecuta automaticamente
  constructor(_x, _y) {
    this.posx = _x;
    this.posy = _y;
    this.estaViva = true;
    //tVida es el tiempo que tiene de vida
    this.tVida = round(random(10, 200));
    this.tamaño = 1;
    this.opacidad = 100;
  }

  update() {
    // this.tVida -= 1;
    // if (this.tVida <= 0) {
    //   this.estaViva = false;
    //   return;
    // }

    if (this.posy < this.tamaño / 2) {
      this.estaViva = false;
      return;
    }

    this.opacidad -= 0.5;

    this.posy - 2;
    this.posx += random(-10, 10);
    this.tamaño += 0.5;
  }
  display() {
    fill(255, this.opacidad);
    noStroke();
    circle(this.posx, this.posy, this.tamaño);
    circle();
  }
}
