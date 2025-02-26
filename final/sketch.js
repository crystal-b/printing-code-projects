// inspired by https://www.pinterest.com/pin/241294492513786204/
var poster = true;

if(poster === true) {
  var r = new Rune({
    container: "#canvas",
    width: 850,
    height: 1199,
    debug: false
  }); 
}
else {
  var r = new Rune({
    container: "#canvas",
    width: 850,
    height: 1800,
    debug: false
  });
}


/* * * VARIABLES * * */
  var b = 100;
  var c = 255;
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
  var bullets = [];
  var l = 0;
  var fadeX = 0;
  var fadeY = 0;
  var alpha = 1;
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
      for(j = 50; j <= 50 && j >= 0; j -= xStep) {
        k = noise.get(noiseStep3) * 60;
        rectNoisePath.lineTo(j, k);
        noiseStep3 += 0.1;
      }
    rectNoisePath.move(x, y);
  }
  function bullet() {
    var tip = r.path(0, 0)
        .moveTo(0, 20)
        .curveTo(20, 10)
        .fill('hsv', 0, b, 100, alpha)
        .stroke(false);
    tip.move(x+35, y);
    var bulletGroup = r.path(x, y)
      .lineTo(10, 0)
      .lineTo(10, 20)
      .lineTo(0, 20)
      .closePath()
      .moveTo(15, 0)
      .lineTo(35, 0)
      .lineTo(35, 20)
      .lineTo(15, 20)
      .closePath()
      .fill('hsv', 0, b, 100, alpha)
      .stroke(false);
    bulletGroup.move(x, y);
  }
  function bulletFill(x, y) {
    var bulletGroupFill = r.path(x, y)
      .lineTo(10, 0)
      .lineTo(10, 20)
      .lineTo(0, 20)
      .closePath()
      .moveTo(15, 0)
      .lineTo(35, 0)
      .lineTo(55, 10)
      .lineTo(35, 20)
      .lineTo(15, 20)
      .closePath()
      .fill(c)
      .stroke(c);
    bulletGroupFill.move(x, y);
  }
  function bulletText() {
    for (var t = 76; t <= 76 * 5; t += 12) {
      bulletFill(bullets[t].xPos, bullets[t].yPos);
    }
    for (var t = 78; t <= 78 * 5; t += 12) {
      bulletFill(bullets[t].xPos, bullets[t].yPos);
    }
    for (var t = 3; t <= 51; t += 12) {
      bulletFill(bullets[t].xPos, bullets[t].yPos);
    }
  }
  function fade() {
    var fading = r.rect(fadeX, fadeY, width, 1)
      .fill('hsv', 100, 100, 100, 0)
      .stroke(false);
    for (j = 1/height; j<=1; j+=1/height) {
        fading.fill('hsv', 0, 0, 100, j)
        .stroke(false);
        fading.copy().move(0, 150+j*1000, true);
        console.log(j);
    }
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




/* * * TEXT * * */
  function text() {
    r.rect(425, 500, 355, 200)
      .fill(255)
      .stroke(false);
    r.text("Whatever", (width/7) * 4, 540)
      .fill('hsv', 0, 0, 0, 1)
      .stroke(false)
      .fontSize(40)
      //.textAlign("center")
      .fontFamily("Futura");
    r.text("Happened to", (width/7) * 4, 600)
      .fill('hsv', 0, 0, 0, .6)
      .stroke(false)
      .fontSize(40)
      //.textAlign("center")
      .fontFamily("Futura");
    r.text("Gun Control?", (width/7) * 4, 660)
      .fill('hsv', 0, 0, 0, .3)
      .stroke(false)
      .fontSize(40)
     // .textAlign("center")
      .fontFamily("Futura");
    r.rect(0, 1045, width, 200)
      .fill(255)
      .stroke(false);
    r.text("In These Times", width/2, 1170)
      .fill(70)
      .stroke(false)
      .fontSize(125)
      .textAlign("center")
      .fontFamily("Futura");
  }




/* * * ALGORITHMS * * */
function emphasize() {

}
function nothing() {
// set row Y
  for (y = 0; y <= height; y += s) {
    // if(y >= 500 && y < 550) {
    //   alpha = .9;
    // }
    // else if(y >= 550 && y < 600) {
    //   alpha = .8;
    // }
    if(y >= 250 && y < 350) {
      alpha = .7;
    }
    else if(y >= 350 && y < 450) {
      alpha = .6;
    }
    else if(y >= 450 && y < 550) {
      alpha = .5;
    }
    else if(y >= 550 && y < 650) {
      alpha = .4;
    }
    else if(y >= 650 && y < 750) {
      alpha = .3;
    }
    else if(y >= 750 && y < 850) {
      alpha = .2;
    }
    else if(y >= 850 && y < 950) {
      alpha = .1;
    }
    else if(y >= 950 && y < 1000) {
      alpha = .05;
    }
    else if(y >= 1000) {
      b = 0;
    }
  // set column X
    for (x = 0; x <= width; x += z) {
      if (dynamic === true) {
      // set column width
        for (i = 0; i <= 5; i++) {
        // set min/max column widths
          w = 50;
          w = w * Math.round(Rune.random(1,3));
        // call dynamic positive shapes
          rectanglePath();
          //rectangleNoisePath();
          x = x+20;
        }
      }
      else {
      // adjust column width
        z = 72;
      // call non-dynamic positive shapes
        bullet();
      // update array with a new object
        bullets.push({xPos : x, yPos : y});
      }
    }
  }
// call negative shapes
  //no();
}


/* * * MAKE STUFF HAPPEN * * */
nothing();
text();








    // var bulletFilled = r.path(x, y)
    //   .lineTo(10, 0)
    //   .lineTo(10, 20)
    //   .lineTo(0, 20)
    //   .closePath()
    //   .moveTo(15, 0)
    //   .lineTo(35, 0)
    //   .lineTo(55, 10)
    //   .lineTo(35, 20)
    //   .lineTo(15, 20)
    //   .closePath()
    //   .fill('hsv', 0, 0, 100, 1)
    //   .stroke(255);
    // bulletFilled.move(100, 200);




r.draw();



