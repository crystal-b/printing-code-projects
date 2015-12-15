//impact of variable color assignment

var r = new Rune({
  container: "#canvas",
  width: 1700,
  height: 1900,
  //debug: true
});

/***   GRID   ***/
var grid1 = r.grid({
  x: 0,
  y: 0,
  width: r.width,
  height: r.height,
  gutter: 0,
  columns: 9,
  rows: 12,
});

//grid1.rotate(15);

var grid2 = r.grid({
  x: 0,
  y: 0,
  width: r.width,
  height: r.height,
  gutter: 0,
  columns: 3,
  rows: 5
});

var grid3 = r.grid({
  x: 0,
  y: 0,
  width: r.width,
  height: r.height,
  gutter: 0,
  columns: 16,
  rows: 18
});


console.log(grid3.vars);

/***   TEXT   ***/
r.text("THE", 1170, 200)
  .fill(30)
  .stroke(false)
  .fontSize(220)
  //.textAlign("center")
  .fontFamily("Futura")
  .rotate(180, 1375, 100)

r.text("Satanic", 1800, 150)
  .fill(30)
  .stroke(false)
  .fontSize(500)
  //.textAlign("center")
  .fontFamily("Futura")
  .rotate(90, 1500, -150)

r.text("V", 1650, 645)
  .fill(30)
  .stroke(false)
  .fontSize(640)
  //.textAlign("center")
  .fontFamily("Futura")
  .rotate(90, 1500, -150)

r.text("erses", 2060, 460)
  .fill(30)
  .stroke(false)
  .fontSize(612)
  //.textAlign("center")
  .fontFamily("Futura")
  .rotate(90, 1500, -150)



/***   SHAPES   ***/
function triangle(x1, y1, x2, y2, x3, y3)  {
  r.triangle(x1, y1, x2, y2, x3, y3)
    .fill('hsv', 270, 90.5, 32.9)
    .stroke(false)
}

function rectangle(x, y, w, h, hue, sat, val, rot) {
  r.rect(x, y, w, h)
    .fill('hsv', hue, sat, val)
    .stroke(false)
    .rotate(rot, x, y)
}

triangle(1600, 900, 1100, 1100, 1100, 700)

r.text("erses", 2060, 460)
  .fill(30)
  .stroke(false)
  .fontSize(612)
  //.textAlign("center")
  .fontFamily("Futura")
  .rotate(90, 1500, -150)

for (i=1100; i>0; i-=200) {
  rectangle(i, 850, 100, 50, 16, 68.6, 100, 15)
}
for (i=1100; i>0; i-=200) {
  rectangle(i, 900, 100, 50, 5, 99.6, 99.8, -15)
}

for (j=670; j<800; j+=200) {
  rectangle(900, j, 100, 50, 16, 68.6, 100, 15)
}
for (j=1030; j<1200; j+=200) {
  rectangle(900, j, 100, 50, 16, 68.6, 100, -15)
}

for (j=450; j<700; j+=200) {
  rectangle(700, j, 100, 50, 16, 68.6, 100, 15)
}
for (j=1050; j<1400; j+=200) {
  rectangle(700, j, 100, 50, 16, 68.6, 100, -15)
}

for (j=230; j<800; j+=200) {
  rectangle(500, j, 100, 50, 16, 68.6, 100, 15)
}
for (j=1070; j<1600; j+=200) {
  rectangle(500, j, 100, 50, 16, 68.6, 100, -15)
}

for (j=10; j<800; j+=200) {
  rectangle(300, j, 100, 50, 16, 68.6, 100, 15)
}
for (j=1090; j<1800; j+=200) {
  rectangle(300, j, 100, 50, 16, 68.6, 100, -15)
}
for (j=-10; j<700; j+=200) {
  rectangle(100, j, 100, 50, 16, 68.6, 100, 15)
}
for (j=1110; j<1800; j+=200) {
  rectangle(100, j, 100, 50, 16, 68.6, 100, -15)
}



// for (i=1100; i>0; i-=200) {
//   rectangle(i, 900, 100, 50, 5, 99.6, 99.8, 0)
// }

for (j=720; j<800; j+=200) {
  rectangle(900, j, 100, 50, 5, 99.6, 99.8, 15)
}
for (j=1080; j<1200; j+=200) {
  rectangle(900, j, 100, 50, 5, 99.6, 99.8, -15)
}

for (j=500; j<800; j+=200) {
  rectangle(700, j, 100, 50, 5, 99.6, 99.8, 15)
}
for (j=1100; j<1500; j+=200) {
  rectangle(700, j, 100, 50, 5, 99.6, 99.8, -15)
}

for (j=280; j<800; j+=200) {
  rectangle(500, j, 100, 50, 5, 99.6, 99.8, 15)
}
for (j=1120; j<1700; j+=200) {
  rectangle(500, j, 100, 50, 5, 99.6, 99.8, -15)
}

for (j=60; j<800; j+=200) {
  rectangle(300, j, 100, 50, 5, 99.6, 99.8, 15)
}
for (j=1140; j<1800; j+=200) {
  rectangle(300, j, 100, 50, 5, 99.6, 99.8, -15)
}

for (j=40; j<700; j+=200) {
  rectangle(100, j, 100, 50, 5, 99.6, 99.8, 15)
}
for (j=1160; j<1800; j+=200) {
  rectangle(100, j, 100, 50, 5, 99.6, 99.8, -15)
}

// var a = r.path(0, 0)
//   // .moveTo(100, 100)
//   // .lineTo(200, 100)
//   // .curveTo(200, 250, 100, 250, 100, 100)
//   // .closePath()

//   .moveTo(0, 800)
//   .curveTo(300, 1250, 900, 600)
//   .lineTo(938,703)
//   //.curveTo()
//   //.curveTo(400, 0)
//   //.lineTo(220, 120)
//   //.closePath()
//   .fill(false)
//   .stroke(0, 0, 0)
//   .rotate(340);

//   var a2 = r.path(0, 0)
//     .moveTo(300, 800)
//     .curveTo(600, 1250, 1200, 600)
//     .fill(false)
//     .stroke(255, 0, 255)
//     .rotate(-14, 100, 800);

//   var a3 = r.path(0, 0)
//     .moveTo(0, 800)
//     .curveTo(300, 1250, 900, 600)
//     .lineTo(950,700)
//     .fill(false)
//     .stroke(0, 255, 255)
//     .rotate(340);

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
//   .stroke(false);

r.draw();

