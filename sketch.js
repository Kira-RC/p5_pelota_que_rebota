let posx;
let posy;
let diam;
let rad;
let velx;
let vely;

function setup(){
  createCanvas(windowWidth, windowHeight);
  diam = random(50, 300);
  rad = diam /2;

  posx = random(rad, width - rad);
  posy = random(rad, height - rad);

  velx = random(-5, 5);
  vely = random(-5, 5);

  rectMode (CENTER);
}

function draw(){
  background(150);
  
  actualizar();
  visualizar();
}


/** 
 * Función actualizar
 */

function actualizar(){
if(posx > width - rad || posx < rad){
      velx *= -1; 
  }

  if(posy > height - rad || posy < rad){
      vely *= -1; 
  }

  posx += velx;
  posy += vely;
}

function visualizar(){
  fill("#7ec6f7c1");
  circle(posx, posy, diam);
  fill("#f0b81de0");
  square(posx, posy, diam/2);
}

