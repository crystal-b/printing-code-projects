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
  var dynamic = true;

//SHAPES
  function rectangle() {
    r.rect(x, y, w, h)
      .fill(0)
      .stroke(false);
  }
  function rectanglePath() {
    // var rectPath = r.path(x, y)
    //   .lineTo(w, y)
    //   .lineTo(w, h)
    //   .lineTo(x, h)
    //   .closePath()
    //   .fill(0)
    //   .stroke(false);
    // var rectPath = r.path(0, 0)
    //   .lineTo(50, 0)
    //   .lineTo(50, 30)
    //   .lineTo(0, 30)
    //   .closePath()
    //   .fill(0)
    //   .stroke(false);
    var rectPath = r.path(x, y)
      .lineTo(w, 0)
      .lineTo(w, h)
      .lineTo(0, h)
      .closePath()
      .fill(0)
      .stroke(false);

    rectPath.move(x, y);
  }
  function bullet() {
    //what the hell is this doing?
    //var bulletGroup = r.group(x, y, parent);
    var bulletGroup = r.path(50, 50)
      .lineTo(10, 0)
      .lineTo(10, 20)
      .lineTo(0, 20)
      .closePath()
      .moveTo(15, 0)
      .lineTo(40, 0)
      .lineTo(60, 10)
      .lineTo(40, 20)
      .lineTo(15, 20)
      .closePath()
      .fill(255, 0, 0)
      .stroke(false);

    bulletGroup.move(x, y);
  }
  function no() {
    var diameter = 300;
    var sc = 255;
    var sw = 70;
    r.circle(width/2, height/2, diameter)
      .fill(false)
      .stroke(sc)
      .strokeWidth(sw);
    r.rect(400, 300, sw, diameter*2)
      .fill(sc)
      .stroke(false)
      .rotate(-45, width/2, height/2);
  }

//ALGORITHM
// set row Y
  for (y = 0; y <= height; y += s) {
// set column X
    for (x = 0; x <= width; x += z) {
      if (dynamic === true) {
      // set column width
        for (i = 0; i <= 5; i++) {
          w=50;
          w = w * Math.round(Rune.random(1,3));
      // call dynamic positive shapes
          rectanglePath();
          x = x+20;
        }
      }
      else {
      // call positive shapes
        bullet();
      }
    }
  }
// call negative shapes
  //rectanglePath();
  no();
}


//MAKE STUFF HAPPEN
nothing();

r.draw();



