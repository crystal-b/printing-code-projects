var r = new Rune({
  container: "#canvas",
  background: 255,
  width: 800,
  height: 1200,
  debug: true
});

function rectangle(x, y, w, h, c, s, rot) {
  r.rect(x, y, w, h)
    .fill(c)
    .stroke(s)
    .rotate(rot, x, y)
}
function ellipse(x, y, w, h, c, s, sw) {
  r.ellipse(x, y, w, h)
    .fill(c)
    .stroke(s)
    .strokeWidth(sw)
}
function triangle(x1, y1, x2, y2, x3, y3, c, s, sw) {
  r.triangle(x1, y1, x2, y2, x3, y3)
    .fill(c)
    .stroke(s)
    .strokeWidth(sw)
}

function satellite() {
  //solar panels
  rectangle(340, -40, 200, 100, 0, false, 45)
  rectangle(640, 275, 200, 100, 0, false, 45)
  //connecting lines
  rectangle(440, 135, 250, 10, 0, false, 45)
  //satellite
  ellipse(500, 250, 150, 150, 0, false, 0)
  ellipse(550, 200, 150, 150, 0, false, 0)
  rectangle(500, 145, 50, 80, 0, false, 45)
  rectangle(575, 210, 50, 80, 0, false, 45)
  ellipse(500, 250, 155, 155, false, 255, 10)
}

satellite()



r.draw();