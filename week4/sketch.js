//impact of variable color assignment

var r = new Rune({
  container: "#canvas",
  width: 1500,
  height: 1100,
  debug: false
});

var rand = Rune.random(0, 360)
var bw = Rune.random(0, 255)
var bkg = r.rect(0, 0, 1500, 1100)
  .fill('hsv', rand, 50, 70, 1)
  .stroke(false)
var retina2 = r.ellipse(750, 550, 1000, 1000)
  .fill('hsv', Rune.random(0, 360), 100, 100, .2)
  .stroke(false)
var retina3 = r.ellipse(750, 550, 900, 900)
  .fill('hsv', Rune.random(0, 360), 100, 100, .3)
  .stroke(false)
var retina4 = r.ellipse(750, 550, 800, 800)
  .fill('hsv', Rune.random(0, 360), 100, 100, .4)
  .stroke(false)
var retina5 = r.ellipse(750, 550, 700, 700)
  .fill('hsv', Rune.random(0, 360), 100, 100, .5)
  .stroke(false)
var retina6 = r.ellipse(750, 550, 600, 600)
  .fill('hsv', Rune.random(0, 360), 100, 100, .6)
  .stroke(false)
var retina7 = r.ellipse(750, 550, 500, 500)
  .fill('hsv', Rune.random(0, 360), 100, 100, .7)
  .stroke(false)
var retina8 = r.ellipse(750, 550, 400, 400)
  .fill('hsv', Rune.random(0, 360), 100, 100, .8)
  .stroke(false)
var retina9 = r.ellipse(750, 550, 350, 350)
  .fill('hsv', Rune.random(0, 360), 100, 100, .9)
  .stroke(false)
var retina = r.ellipse(750, 550, 300, 300)
  .fill('hsv', Rune.random(0, 360), 100, 100, 1)
  .stroke(false)
// var bkg2 = r.rect(750, 0, 750, 800)
//   .fill('hsv', rand, 50, 70, 1)
//   .stroke(false)
var eyeR = r.path(750, 250)
  .lineTo(0, -50)
  .curveTo(250, -50, 650, 350)
  .curveTo(250, 650, 0, 650)
  .lineTo(0, 300)
  // .curveTo(150, 100, 200, 0)
  // .curveTo(250, -100, 300, 0)
  // .lineTo(300, 200)
  // .lineTo(0, 200)
  .closePath()
  .fill(bw)
  .stroke(false);
var eyeL = r.path(750, 250)
  .lineTo(0, -50)
  .curveTo(-250, -50, -650, 300)
  .curveTo(-250, 650, 0, 650)
  .lineTo(0, 300)
  // .curveTo(150, 100, 200, 0)
  // .curveTo(250, -100, 300, 0)
  // .lineTo(300, 200)
  // .lineTo(0, 200)
  .closePath()
  .fill(bw)
  .stroke(false);
var retinaBG = r.ellipse(750, 500, 300, 300)
  .fill('hsv', rand, 100, 100, 1)
  .stroke(false)


r.draw();