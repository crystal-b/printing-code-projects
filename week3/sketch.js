//paths and polygons

var r = new Rune({
  container: "#canvas",
  width: 850,
  height: 1200,
  debug: true
});

// var p = r.polygon(100,200)
//   for(i=0; i<50; i++) {
//     p.lineTo(Math.random() * 500, Math.random() * 500)
//   }

  //sample
 //r.ellipse(400, 350, 500, 600);

 var x1 = 246;
 var x2 = 475;
 var x3 = 704;
 var y1 = 526;
 var y2 = 100;
 var y3 = 526;
 var nx1 = 50;
 var nx2 = 200;
 var nx3 = 70;
 var ny1 = 1150;
 var ny2 = 1050;
 var ny3 = 1180;

var baloon = r.ellipse(475, 625, 500, 500)
  .stroke(false)
  .fill(0);

var baloonTop = r.triangle(x1, y1, x2, y2, x3, y3)
  .stroke(false)
  .fill(0, 0, 0);

// var needle = r.triangle(nx1, ny1, nx2, ny2, nx3, ny3)
// var needle = r.triangle(50, 1150, 200, 1050, 70, 1100)
var needle = r.triangle(0, 1000, 200, 200, 100, 1000)
  .stroke(false)
  .fill(0, 255, 0)
  .rotate(0)
  console.log(needle.vars);

// var b = r.polygon(0,0)
//   .lineTo(700, 325)
//   .lineTo(500, 600)
//   .lineTo(530, 650)
//   .lineTo(270, 650)
//   .lineTo(300, 600)
//   .lineTo(100, 325)
//   //.closePath();

// function hexagon(){
//   r.triangle(0, 0, 0, 5, -2.5, 2.5)
//   r.rect(0, 0, 5, 5)
//   r.triangle(5, 0, 7.5, 2.5, 5, 5)
// };

//   //160 hexagons
// var h = r.polygon(i, j)
//   .lineTo(0, 0)
//   .lineTo(5, 0)
//   .lineTo(7.5, 2.5)
//   .lineTo(5, 5)
//   .lineTo(0, 5)
//   .lineTo(-2.5, 2.5)

//   for(i=0; i<800; i+=10) {

//   }




r.draw();