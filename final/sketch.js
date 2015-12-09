// inspired by https://www.pinterest.com/pin/241294492513786204/

var r = new Rune({
  container: "#canvas",
  width: 850,
  height: 1199,
  debug: true
});


/* * * VARIABLES * * */
  var x = 0;
  var y = 0;
  var w = 50;
  var h = 30;
  var height = 1200;
  var width = 850;
  var s = 50;
  var z = 100;
  var xStep = 15;
  var yStep = 5;
  var noiseStep = 0;
  var noiseStep2 = 50;
  var noiseStep3 = h;
  var dynamic = true;

/* * * SHAPES * * */
  function rectangle() {
    r.rect(x, y, w, h)
      .fill(0)
      .stroke(false);
  }
  function rectanglePath() {
    var rectPath = r.path(x, y)
      .lineTo(w, 0)
      .lineTo(w, h)
      .lineTo(0, h)
      .closePath()
      .fill(0)
      .stroke(false);
    rectPath.move(x, y);
  }

  function rectangleNoisePath() {
    var noise = new Rune.Noise();
    var rectNoisePath = r.path(0, 0)
      .fill(0)
      .stroke(0);
      for(var j = 0; j <= w; j += xStep) {
        var k = noise.get(noiseStep) * 2;
        rectNoisePath.lineTo(j, k);

        noiseStep += 0.1;
      }
      // for(k = 0; k <= 30; k += yStep) {
      //   j = noise.get(noiseStep2) * 100;
      //   rectNoisePath.lineTo(j, k);

      //   noiseStep2 += 0.01;
      //   console.log(j);
      // }
      // for(j = 50; j <= 50 && j >= 0; j -= xStep) {
      //   k = noise.get(noiseStep3) * 60;
      //   rectNoisePath.lineTo(j, k);

      //   noiseStep3 += 0.1;
      // }
      // for(k = 30; k <= 30; k -= yStep) {
      //   j = noise.get(noiseStep) * 5;
      //   rectNoisePath.lineTo(j, k);

      //   noiseStep += 0.1;
      // }

    rectNoisePath.move(x, y);
  }
  /* * * NOISE * * */
// var xStep = 15;
// var noise = new Rune.Noise();
// var noiseStep = 0;
// for(var j = 0; j <= w; j += xStep) {
//   var k = noise.get(noiseStep) * 100;
//   rectanglePath.lineTo(j, k);

//   noiseStep += 0.1;
// }

  function bullet() {
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
      // .fill(false)
      .fill(255)
      .stroke(sc)
      .strokeWidth(sw);
    r.rect(400, 300, sw, diameter*2)
      .fill(sc)
      .stroke(false)
      .rotate(-45, width/2, height/2);
  }




/* * * ALGORITHMS * * */
function emphasize() {

}
function nothing() {
// set row Y
  for (y = 0; y <= height; y += s) {
  // set column X
    for (x = 0; x <= width; x += z) {
      if (dynamic === true) {
      // set column width
        for (i = 0; i <= 5; i++) {
        // set min/max column widths
          w = 50;
          w = w * Math.round(Rune.random(1,3));
        // call dynamic positive shapes
          rectangleNoisePath();
          x = x+20;
        }
      }
      else {
      // adjust column width
        z = 72;
      // call non-dynamic positive shapes
        //bullet();
        rectangleNoisePath();
      }
    }
  }
// call negative shapes
  no();
}

// if (array[j].x >= object[*].x && array[j].y >= object[*].y) {
//   move x 5 pixels away
//   move y 5 pixels away
// }


/* * * MAKE STUFF HAPPEN * * */
nothing();

r.draw();



