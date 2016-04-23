//paths and polygons

var r = new Rune({
  container: "#canvas",
  width: 1500,
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
//curvedUp/Down() variables
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
//wet() variables
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

//wave Y increments
for (var i = 0; i <= height; i+=150) {
  yStart = i;
  //how can I make this work outside of the for loop?
  //wet();
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

// function droplet () {
//   var wet = r.path()
//   .fill(0, 0, 255)
//   .stroke(false)
//   .degree(rotate);
// }

function crystal (moveX, moveY, leftFacetX, leftFacetY,  bumpX1, bumpY1, bumpX2, bumpY2, bumpX3, bumpY3, facetX1, facetY1, facetX2, facetY2, facetX3, facetY3, facetX4, facetY4, facetX5, facetY5, facetX6, facetY6, facetX7, facetY7, facetX8, facetY8, facetX9, facetY9, facetX10, facetY10, facetX11, facetY11, facetX12, facetY12, facetX13, facetY13, facetX14, facetY14, rightFacetX, rightFacetY, degree) {
  var sharp = r.polygon(moveX, moveY)
    .lineTo(leftFacetX, leftFacetY)
    .lineTo(bumpX1, bumpY1)
    .lineTo(bumpX2, bumpY2)
    .lineTo(bumpX3, bumpY3)
    .lineTo(facetX1, facetY1)
    .lineTo(facetX2, facetY2)
    .lineTo(facetX3, facetY3)
    .lineTo(facetX4, facetY4)
    .lineTo(facetX5, facetY5)
    .lineTo(facetX6, facetY6)
    .lineTo(facetX7, facetY7)
    .lineTo(facetX8, facetY8)
    .lineTo(facetX9, facetY9)
    .lineTo(facetX10, facetY10)
    .lineTo(facetX11, facetY11)
    .lineTo(facetX12, facetY12)
    .lineTo(facetX13, facetY13)
    .lineTo(facetX14, facetY14)
    .lineTo(rightFacetX, rightFacetY)
    .fill(0, 255, 0)
    .stroke(false)
    .rotate(degree);
}

//wet(); this is unecessary until I figure out the for loop sitch
crystal(0, 0, //moveTo
        0, 0, //leftFacet
        35, 40,      //1
        32, 55,      //2
        40, 60, //3
        75, 75, //facet1
        50, 125, //facet2
        90, 200, //facet3
        110, 250, //facet4
        120, 320, //facet5
        130, 400, //facet6
        140, 470, //facet7
        150, 500, //facet4 POINT
        180, 400, //facet9
        200, 370,  //facet10
        220, 250,  //facet11
        240, 150,  //facet12
        280, 98,   //facet13
        225, 90,  //facet14
        300, 0, //rightFacet
        0); //rotation




r.draw();