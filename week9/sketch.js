var r = new Rune({
  container: "#canvas",
  width: 850,
  height: 1200,
  debug: true
});



//random

// var b = r.polygon(0,0)
//   .lineTo(700, 325)
//   .lineTo(500, 600)
//   .lineTo(530, 650)
//   .lineTo(270, 650)
//   .lineTo(300, 600)
//   .lineTo(100, 325)
// x = i
// y = random

// for(var i = 0; i < 10; i++) {
//   var y = Rune.random(0, 10)
//   var x = i
//   var random = r.path(100, 100)
//     //.lineTo(x, y)
//     //.closePath();
//     .moveTo(200, 200)
//     .lineTo(i * 50, y) 
//     console.log({i, y});

// }

/* WEEK 9 */

var bkg = r.rect(0, 0, 850, 1200)
  .fill(255)
  .stroke(false)


for(var j = 0; j < 50; j++) {
  var randomLine = r.path(150, Rune.random(290, 870))
  .stroke(50)
  .fill(false)

  for(var i = 0; i < 10; i++) {
    var y = Rune.random(0, 10)
    var x = i  * 60;
    randomLine.lineTo(x, y) 
    //  console.log({i, y});
  }
}

//r.rect(150, 250, 100, 20)

var content = r.path(150, 260)
  .fill(false)
  // .stroke('hsv', 6, 74, 10, 1)
  .stroke(0)
  .strokeWidth(8)

  for(var i = 0; i < 10; i++) {
    var y1 = Rune.random(0, 5)
    var x1 = i  * 20;
    content.lineTo(x1, y1) 
    //  console.log({i, y});
  }

  var signoff = r.path(525, 900)
  // .stroke('hsv', 6, 74, 10, 1)
  .stroke(0)
  .fill(false)
  .strokeWidth(8)

  for(var i = 0; i < 10; i++) {
    var y1 = Rune.random(0, 5)
    var x1 = i  * 10;
    signoff.lineTo(x1, y1) 
    //  console.log({i, y});
  }

var signature = new Rune.Noise();
var noiseStep = 0;
var noiseLine = r.path(525, 920)
  .fill(false)
  // .stroke('hsv', 6, 74, 10, 1)
  .stroke(0)
  .strokeWidth(8)

for(var i = 0; i < 10; i++) {
  var y = signature.get(noiseStep) * 50
  var x = i * 20;
  noiseLine.lineTo(x, y) 
  noiseStep += 0.1;
}


// //modulo
// var moduloLine = r.path(100, 300)
// .fill(false)

// for(var i = 0; i < 10; i++) {
//   var y = (10 % 2) * 300;
//   var x = i * 50;
//   moduloLine.lineTo(x, y) 
//   //console.log({x, y});
// }

var seedBlock = r.rect(125, 0, 30, 1200)
  .fill(255)
  .stroke(false)

var seedBlock2 = r.rect(500, 890, 30, 1200)
  .fill(255)
  .stroke(false)


//perlin noise
// var noise = new Rune.Noise();
// var noiseStep = 0;
// var noiseLine = r.path(150, 275)
// .fill(false)



// for(var i = 0; i < 10; i++) {
//   var y = noise.get(noiseStep) * 50
//   var x = i * 60;
//   noiseLine.lineTo(x, y) 
//   noiseStep += 0.1;
// }

var paper = r.rect(125, 150, 600, 900)
  .stroke(false)
  // .fill('hsv', 6, 74, 90.6, .7)
  // .fill('hsv', 32, 41.1, 90.6, .7)
  .fill('hsv', 15, 82.4, 93.3, .7)


// draw 9 circles on a black background
// different sizes
// different outlines
// spherical lines inside

//color array
// var circleColors = [
//   new Rune.Color("#5daac4"),
//   new Rune.Color("#FBDF7E"),
//   new Rune.Color("#01907C"),
//   new Rune.Color("#FE7377"),
//   new Rune.Color("#F7453B"),
//   new Rune.Color("#727CB9"),
//   new Rune.Color("#F7BF77")
// ]

// function randomColor(array) {
//   var index = Math.round(Rune.random(array.length-1));
//   return array[index];
// }


// // draw background
// r.rect(0, 0, r.width, r.height).fill(30);
// var noise = new Rune.Noise().noiseDetail(0.2);
// var numPoints = 60;
// var pointDegree = 360 / numPoints;
// var radius = 50;
// var noiseStep = 0;
// var ornaments = [];


// for(var j = 0; j < 9; j++) {
//   var xLoc = Rune.random(150, 700);
//   var yLoc = Rune.random(200, 1000);


//   var noiseCircle =r.polygon(xLoc, yLoc)
//     .stroke(false)
//     .fill(randomColor(circleColors));

//   var randomLine = r.path(xLoc, yLoc-80)
//     .fill(false)
//     .stroke(0);
//   for(var i = 0; i < 10; i++) {
//     var lineX = Rune.random(0, 10)
//     var lineY = i  * 18;
//     randomLine.lineTo(lineX, lineY) 
//   }

//   var a = r.path(0, 0)


//   .moveTo(xLoc, yLoc-80)
//   .curveTo(300, 1250, 900, 600)
//   .lineTo(938,703)
//   .fill(false)
//   .stroke(0, 0, 0);



//   ornaments.push(noiseCircle);
//   console.log(ornaments);

//   for(var i = 0; i < numPoints; i++) {

//     var noiseRadius = (noise.get(noiseStep) * 10) + radius;
//     var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
//     var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

//     ornaments[j].lineTo(x, y);
//     noiseStep += 0.1;
//   }
// }


r.draw();



//impact of variable color assignment

// var r = new Rune({
//   container: "#canvas",
//   width: 850,
//   height: 1200,
//   //debug: true
// });


// var friendOpp = [
//   new Rune.Color(0, 0, 0),
//   new Rune.Color(235, 60, 161),
//   new Rune.Color(167, 25, 48),
//   new Rune.Color(183, 201, 20)
// ]

// var reveille = [
//   new Rune.Color(188, 221, 226),
//   new Rune.Color(224, 89, 118),
//   new Rune.Color(251, 219, 80),
//   new Rune.Color(147, 152, 155),
//   new Rune.Color(172, 204, 162)
// ]

// var greenCosmos = [
//   new Rune.Color(30, 30, 30),
//   new Rune.Color(74, 206, 156),
//   new Rune.Color(252, 242, 127),
//   new Rune.Color(133, 238, 221),
//   new Rune.Color(69, 61, 119),
//   new Rune.Color(183, 118, 54)  
// ]

// var breakup = [
//   new Rune.Color(30, 30, 30),
//   new Rune.Color(72, 209, 204),
//   new Rune.Color(235, 144, 78),
//   new Rune.Color(199, 21, 133)
//   // new Rune.Color(69, 61, 119),
//   // new Rune.Color(183, 118, 54)  
// ]


// function randomColor(album) {
//   var index = Math.round(Rune.random(album.length-1));
//   return album[index];
// }



// // function sticks() {
// //   var stick = r.path(200, 100)
// //     .moveTo(0, 100)
// //     .curveTo(-200, 300)
// //     //.moveTo(50,200)
// //     .lineTo(0, 1000)
// //     .fill(false)
// //     .stroke(0, 0, 0)
// // }

// // function sticks(moveX, moveY, lineX, lineY, rot) {
// //   var stick = r.path(0, 0)
// //     .moveTo(100, 300)
// //     .lineTo(100, 900)
// //     .fill(false)
// //     .stroke(0, 0, 0)
// //     .strokeWidth(10)
// //     .rotate(-90, 100, 300)
// // }

// // function sticks(moveX, moveY, lineX, lineY, rot) {
// //   var stick = r.path(0, 0)
// //     .moveTo(moveX, moveY)
// //     var lineX = moveX
// //     var lineY = moveY + 600
// //     .lineTo(lineX, lineY)
// //     .fill(false)
// //     .stroke(0, 0, 0)
// //     .strokeWidth(10)
// //     .rotate(rot, 100, 300)
// // }

// // sticks(100, 300, 100, 900, -90);

// var grid1 = r.grid({
//   x: 0,
//   y: 0,
//   width: r.width,
//   height: r.height,
//   gutter: 0,
//   columns: 17,
//   rows: 12,
// });

// var band = r.text("DEERHOOF", 425, 100)
//   .fill(30)
//   .stroke(false)
//   .fontSize(100)
//   .textAlign("center")
//   .fontFamily("Avenir Next")

// // var song = r.text("the perfect me", 425, 1100)
// var song = r.text("we do parties", 425, 1100)
// // var song = r.text("holy night fever", 425, 1100)
// // var song = r.text("green cosmos", 425, 1100)
//   .fill(30)
//   .stroke(false)
//   .fontSize(100)
//   .textAlign("center")
//   .fontFamily("Avenir Next Condensed")

//   console.log(song.vars);


// function sticks(moveX, moveY, color, stk, rot, rotX, rotY) {
//   var lineX = moveX
//   var lineY = moveY + 650
//   var stick = r.path(0, 0)
//     .moveTo(moveX, moveY)
//     .lineTo(lineX, lineY)
//     .fill(false)
//     .stroke(color)
//     .strokeWidth(stk)
//     .rotate(rot, rotX, rotY)
// }

// // green cosmos for (i = 0; i<13; i++) {
// // holy night fever for (i = 0; i<20; i++) {
// // perfect me for (i = 0; i<18; i++) {
// for (i = 0; i<31; i++) {
//   sticks(150, 1000, randomColor(breakup), 10, Rune.random(-100, -190), 150, 1000);
//   sticks(100, 1000, randomColor(breakup), 10, Rune.random(100, 190), 400, 1000);
//   sticks(130, 100, 255, 5, Rune.random(-70, -190), 130, 100);
// }



