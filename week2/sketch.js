var r = new Rune({
  container: "#canvas",
  background: 255,
  width: 800,
  height: 1200,
  debug: true
});

//setup shapes
function rectangle(x, y, w, h, c, s, rot) {
  r.rect(x, y, w, h)
    .fill(c)
    .stroke(s)
    .rotate(rot, x, y)
}
function ellipse(x, y, w, h, c, s, sw, rot) {
  r.ellipse(x, y, w, h)
    .fill(c)
    .stroke(s)
    .strokeWidth(sw)
    .rotate(rot, x, y)
}
function triangle(x1, y1, x2, y2, x3, y3, c, s, sw) {
  r.triangle(x1, y1, x2, y2, x3, y3)
    .fill(c)
    .stroke(s)
    .strokeWidth(sw)
}

//scene
function background() {
  rectangle(0, 0, 800, 1200, 0)
}

function earth() {
  ellipse(20, 20, 110, 110, 150)
}

function potato() {
  for (j=0; j<600; j+=200) {
      var rand = Rune.random(-30, 30)
      var om = Rune.random(-20, 20)
      ellipse(500-j, 1040-om, 170, 200, 255, false, 0, rand)
      ellipse(500-j, 1080-om, 160, 200, 255, false, 0, rand)
      console.log(j)
  }

 for (j=0; j<750; j+=155) {
    var rand = Rune.random(-30, 30)
    var om = Rune.random(-10, 10)
    ellipse(710-j, 1040-250-om, 170*.8, 200*.8, 255, false, 0, rand)
    ellipse(710-j, 1080-250-om, 160*.8, 200*.8, 255, false, 0, rand)
  }

 for (j=0; j<750; j+=113) {
    var rand = Rune.random(-30, 30)
    var om = Rune.random(-10, 10)
    ellipse(740-j, 1040-450-om, 170*.6, 200*.6, 255, false, 0, rand)
    ellipse(740-j, 1080-460-om, 160*.6, 200*.6, 255, false, 0, rand)
  }

 for (j=0; j<750; j+=80) {
    var rand = Rune.random(-30, 30)
    var om = Rune.random(-8, 8)
    ellipse(760-j, 1040-600-om, 170*.4, 200*.4, 255, false, 0, rand)
    ellipse(760-j, 1080-620-om, 160*.4, 200*.4, 255, false, 0, rand)
  }

 for (j=0; j<800; j+=40) {
    var rand = Rune.random(-30, 30)
    var om = Rune.random(-6, 6)
    ellipse(780-j, 1045-700-om, 170*.2, 200*.2, 255, false, 0, rand)
    ellipse(780-j, 1080-720-om, 160*.2, 200*.2, 255, false, 0, rand)
  }

 for (j=0; j<780; j+=23) {
    var rand = Rune.random(-30, 30)
    var om = Rune.random(-4, 4)
    ellipse(780-j, 1045-750-om, 170*.1, 200*.1, 255, false, 0, rand)
    ellipse(780-j, 1080-780-om, 160*.1, 200*.1, 255, false, 0, rand)
  }

 for (j=0; j<780; j+=16) {
    var rand = Rune.random(-30, 30)
    var om = Rune.random(-2, 2)
    ellipse(785-j, 1045-785-om, 170*.06, 200*.06, 255, false, 0, rand)
    ellipse(785-j, 1080-815-om, 160*.06, 200*.06, 255, false, 0, rand)
  }

 for (j=0; j<300; j+=10) {
    var rand = Rune.random(-30, 30)
    var om = Rune.random(-2, 2)
    ellipse(795-j, 1045-808-om, 170*.03, 200*.03, 255, false, 0, rand)
    ellipse(795-j, 1080-841-om, 160*.03, 200*.03, 255, false, 0, rand)
  }
}

//calls
background()
earth()
potato()



r.draw();