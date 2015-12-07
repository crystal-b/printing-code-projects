var r = new Rune({
  container: "#canvas",
  width: 850,
  height: 1199,
  debug: true
});


function nothing () {
  // var n = 50;

  // // for (i = 0; i < n; i++) {
  // //   var vel[i] = r.random(0,0.02);
  // //   var pos1[i] = r.random(0,425);
  // //   var pos2[i] = r.random(0,600);
  // // }

  // var x = 20;
  // var y = 100;

  // r.ellipse(x,y,10,10)

  // //translate

  var x = 0;
  var y = 0;
  var w = 50;
  var h = 30;
  var height = 1200;
  var width = 850;
  var s = 50;
  var z = 100;


  // for(i = 0; i < 30; i++) {
  //       y = y + h + 30;
  //       console.log("y="+y);
  //       console.log("x="+x);

  //   for(j = 0; j < 5; j++) {
  //     console.log("y="+y);
  //       x = x + w + 30;
  //       Math.round(x);
  //       console.log("x="+x);
  //     w = w * Rune.random(1,3);
  //     Math.round(w);
  //     console.log("x="+x);

  //     r.rect(x, y, w, h)
  //       .fill(0)
  //       .stroke(false)

  //   } 
  // }

  // for (y = 0; y <= height; y += s) {
    
  //   for (x = 0; x <= width; x += z) {
  //    // w = w * Math.round(Rune.random(1,3));
  //    for (w = 0; w <=width; w += s * Math.round(Rune.random(1,3))) {
  //       r.rect(x, y, w, 30)
  //         .fill(0)
  //         .stroke(false);
  //       console.log(w);
  //       //x = x+20;
  //     }
  //   }
  //  // w = 0;
  // }

// set row Y
  for (y = 0; y <= height; y += s) {
// set column X
    for (x = 0; x <= width; x += z) {
// set column width
     for (i = 0; i <= 5; i++) {
        w=50;
        w = w * Math.round(Rune.random(1,3));

        r.rect(x, y, w, 30)
          .fill(0)
          .stroke(false);
        console.log(w);
        x = x+20;
      }
    }
   // w = 0;
  }
}

nothing();




r.draw();



