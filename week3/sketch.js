//paths and polygons

var r = new Rune({
  container: "#canvas",
  width: 1200,
  height: 850,
  debug: false
});

// var p = r.polygon(100,200)
//   for(i=0; i<50; i++) {
//     p.lineTo(Math.random() * 500, Math.random() * 500)
//   }

  //sample
 //r.ellipse(400, 350, 500, 600);


/* WAVVVVVES */
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


 var height = 1300;
 var width = 850;
 var yStart = 0;
 var y2 = 100;

function curvedUp() {
    var wave = r.path(width/2, yStart)
        .moveTo(0, 100)
        .curveTo(100, 50)
        //.moveTo(0, 500)
        //.curveTo(900, 250)
        .fill('hsv', 250, 100, 100, 1)
        .stroke(false)
    .rotate(0);
}
function curvedDown() {
    var wave = r.path(width/2, y2)
        .moveTo(0, 50)
        .curveTo(-50, 25)
        //.moveTo(0, 500)
        //.curveTo(900, 250)
        .fill('hsv', 250, 100, 100, 1)
        .stroke(false)
    .rotate(0);
}
function wet() {
  curvedUp();
  curvedDown();
}

wet();



for (var i = 0; i <= height; i+=150) {
  yStart = i;
  wet();
  y2 += 150;
}


/* CRYSTALS */



var moveX = 100;
var moveY = 200;
var leftFacetX = 75;
var leftFacetY = 0;
var facetX1 = 0;
var facetY1 = 400;
var facetX2 = 100;
var facetY2 = 450;
var facetX3 = 150;
var facetY3 = 550;
var facetX4 = 300;
var facetY4 = 400;
var rightFacetX = 225;
var rightFacetY = 0;
var degree = 0;

function droplet () {
  var wet = r.path()
  .fill(0, 0, 255)
  .stroke(false)
  .degree(rotate);
}

function crystal (moveX, moveY, leftFacetX, leftFacetY,  facetX1, facetY1, facetX2, facetY2, facetX3, facetY3, facetX4, facetY4, rightFacetX, rightFacetY, degree) {
  var sharp = r.polygon(moveX, moveY)
    .lineTo(leftFacetX, leftFacetY)
    .lineTo(facetX1, facetY1)
    .lineTo(facetX2, facetY2)
    .lineTo(facetX3, facetY3)
    .lineTo(facetX4, facetY4)
    .lineTo(rightFacetX, rightFacetY)
    .fill(0, 255, 0)
    .stroke(false)
    .rotate(degree);
}

crystal(100, 200, 75, 0, 0, 400, 100, 450, 150, 550, 300, 400, 225, 0, 0);


























// r.path(xStart, yStart)
//   .moveTo(xEnd, yEnd)
//   .curveTo(xMidpoint, yMidpoint)



// var balloonTop = r.triangle(x1, y1, x2, y2, x3, y3)
//   .stroke(false)
//   .fill(0, 0, 0);

// // var needle = r.triangle(nx1, ny1, nx2, ny2, nx3, ny3)
// // var needle = r.triangle(50, 1150, 200, 1050, 70, 1100)
// var needle = r.triangle(0, 1000, 200, 200, 100, 1000)
//   .stroke(false)
//   .fill(0, 255, 0)
//   .rotate(0)
//   console.log(needle.vars);

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


//balloon();

r.draw();