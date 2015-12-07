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
}

//MAKE STUFF HAPPEN
nothing();

r.draw();



