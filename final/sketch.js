// inspired by https://www.pinterest.com/pin/241294492513786204/

var r = new Rune({
  container: "#canvas",
  width: 850,
  height: 1199,
  debug: true
});


function nothing() {

//VARIABLES
  var x = 0;
  var y = 0;
  var w = 50;
  var h = 30;
  var height = 1200;
  var width = 850;
  var s = 50;
  var z = 100;

//SHAPES
  function rectangle() {
    r.rect(x, y, w, h)
      .fill(0)
      .stroke(false);
  }
  function no() {
    var diameter = 300;
    var sc = 255;
    var sw = 70;
    r.circle(width/2, (height/2)-5, diameter)
      .fill(false)
      .stroke(sc)
      .strokeWidth(sw);
    r.rect(400, 300, sw, diameter*2)
      .fill(255, 0, 0)
      .stroke(false)
      .rotate(-10);
  }

//ALGORITHM
// set row Y
  for (y = 0; y <= height; y += s) {
// set column X
    for (x = 0; x <= width; x += z) {
// set column width
     for (i = 0; i <= 5; i++) {
        w=50;
        w = w * Math.round(Rune.random(1,3));
// call shapes
        rectangle();
        x = x+20;
      }
    }
  }
  no();
}

//MAKE STUFF HAPPEN
nothing();

r.draw();



