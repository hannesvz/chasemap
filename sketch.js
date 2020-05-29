const size = 358;
 
let sx;
let sy;

let img = [];

function preload() {
  for (let i = 0; i < 41; i++) {
    img[i] = loadImage(`images/Image${i+1}.png`);
  }
}

function setup() {
  let params = getURLParams();
  sx = (typeof params.x != 'undefined') ? params.x : 10;
  sy = (typeof params.y != 'undefined') ? params.y : 10;
  createCanvas(size * sx, size * sy);
}

function draw() {
  noLoop();
  background(0);
  
  for (let i = 0; i < sx; i++) {
    for (let j = 0; j < sy; j++) {
      image(random(img), i * size, j * size);
    }
  }
  
}
