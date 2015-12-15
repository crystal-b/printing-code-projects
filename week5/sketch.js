//impact of variable color assignment

var r = new Rune({
  container: "#canvas",
  width: 5000,
  height: 5000,
 // debug: true
});


// var a = r.path(0, 0)
//   // .moveTo(100, 100)
//   // .lineTo(200, 100)
//   // .curveTo(200, 250, 100, 250, 100, 100)
//   // .closePath()

//   .moveTo(0, 800)
//   .curveTo(300, 1250, 900, 600)
//   .lineTo(938,703)
//   .curveTo()
//   .curveTo(400, 0)
//   .lineTo(220, 120)
//   .closePath()
//   .fill(false)
//   .stroke(0, 0, 0)
//   .rotate(340);

var a2 = r.path(0, 0)
  .moveTo(300, 800)
  .curveTo(600, 1250, 1200, 600)
  .fill(false)
  .stroke(255, 0, 255)
  .rotate(-14, 100, 800);

var bull = r.path(0, 0)
  .moveTo(0, 600)
  .curveTo(900, 300)
  //.closePath
  .fill(0)
  .stroke(0);



// var b = r.path(0, 0)
//   .moveTo(0, 800)
//   .curveTo(300, 1250, 900, 600)
//   .lineTo(950,700)
//   .fill(false)
//   .stroke(0, 255, 255)
//   .rotate(340);

// var b = r.path(200, 100).lineTo(100, 0).curveTo(100, 500, 500, 100, 0, 0);


// var strokeUpCap = r.path(10, 200)
// .curveTo(100, 100)
// .lineTo(120, 120)
// .curveTo(10,200)

// function Aupper() {

// }

// var eye = r.path(750, 250)
//   .lineTo(0, -50)
//   .curveTo(250, -50, 400, 175)
//   .curveTo(250, 350, 0, 350)
//   .lineTo(0, 300)
//   // .curveTo(150, 100, 200, 0)
//   // .curveTo(250, -100, 300, 0)
//   // .lineTo(300, 200)
//   // .lineTo(0, 200)
//   .closePath()
//   .fill(bw)
  // .stroke(false);

r.draw()
