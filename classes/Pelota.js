class Pelota{
   constructor(){
    
    this.diam = random(20, 300);
    this.rad = this.diam /2;

    this.posx = random(this.rad, width - this.rad);
    this.posy = random(this.rad, height - this.rad);

    this.velx = random(-5, 5);
    this.vely = random(-5, 5);

    this.nuevoColor = color(random(10,50), random(280,255), random(400,150), 100);
  }

  actualizar(){
    if(this.posx > width - this.rad || this.posx < this.rad){
    this.velx *= -1; 
    }

    if(this.posy > height - this.rad || this.posy < this.rad){
    this.vely *= -1; 
    }

    this.posx += this.velx * 0.80;
    this.posy += this.vely * 0.80;

  }

  visualizar(){
  colorMode(HSL);

  // 🎨 Paleta: rosado, morado, celeste y turquesa
  let coloresBase = [310, 270, 200, 170];

  // 🔮 Movimiento de color más lento (antes 0.002 → ahora 0.0005)
  let indice = floor((frameCount * 0.0005 + this.posx * 0.001) % coloresBase.length);
  let siguienteIndice = (indice + 1) % coloresBase.length;

  // 💫 Interpolación más pausada (antes 0.002 → ahora 0.0005)
  let mezcla = map(sin(frameCount * 0.0005 + this.posy * 0.01), -1, 1, 0, 1);
  let hueInterpolado = lerp(coloresBase[indice], coloresBase[siguienteIndice], mezcla);

  // Saturación alta y brillo respirante
  let saturacion = 80;
  let luz = map(sin(frameCount * 0.001 + this.posx * 0.01), -1, 1, 60, 80);

  // Transparencia
  let transparencia = 0.4;

  // 🎨 Colores finales
  let burbuja = color(hueInterpolado, saturacion, luz, transparencia);
  let reflejo = color(hueInterpolado + 15, 70, constrain(luz + 10, 0, 100), 0.25);

  noStroke();

  // 🌫 Sombrita
  fill(0, 0, 0, 0.05);
  ellipse(this.posx + 3, this.posy + 3, this.diam * 1.05);

  // 🫧 Burbuja principal
  fill(burbuja);
  ellipse(this.posx, this.posy, this.diam);

  // ✨ Reflejo suave
  fill(reflejo);
  ellipse(this.posx - this.diam / 4, this.posy - this.diam / 4, this.diam / 3);
  }

}