const size = 358;
 
let px;
let py;

const sx = 10;
const sy = 10;

let img = [];

function preload() {
  for (let i = 0; i < 41; i++) {
    img[i] = loadImage(`images/Image${i+1}.png`);
  }
}

function setup() {
  let params = getURLParams();
  px = (params.x) ? params.x : 10;
  py = (params.y) ? params.y : 10;
  console.log(px,py);

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