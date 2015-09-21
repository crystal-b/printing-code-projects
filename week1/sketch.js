var width = 800;
var height = 1200;
var waffle = 50;

var r = new Rune({
  container: "#canvas",
  background: 0,
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

// rectangle(0,0,100,100,255,0)
// ellipse(0,0,200,200)
/*** cone ***/
function cone() {
  //background
  triangle(width/2-200, 500, width/2, 1100, width/2+200, 500, 0, 0)
  //center row
  for(j=0; j<12; j++) {

    for(i=0; i<450; i+=50) {
    // for(j=0; j<5; j++) {
      // triangle(380-i, 620-j*50, width/2-i, height/2-j*50, 420-i, 620-j*50, 255, false)
      // triangle(380-i, 620-j*50, width/2-i, height/2+40-j*50, 420-i, 620-j*50, 255, false)
      // triangle(380+i, 620+j*50, width/2+i, height/2+j*50, 420+i, 620+j*50, 255, false)
      // triangle(380+i, 620+j*50, width/2+i, height/2+40+j*50, 420+i, 620+j*50, 255, false)
      triangle(180+i, 520+j*50, 200+i, 500+j*50, 220+i, 520+j*50, 255, false)
      triangle(180+i, 520+j*50, 200+i, 540+j*50, 220+i, 520+j*50, 255, false)
    }
  }

  // triangle(380-waffle*3, 620, width/2-waffle*3, height/2, 420-waffle*3, 620, 255, false)
  // triangle(380-waffle*3, 620, width/2-waffle*3, height/2+40, 420-waffle*3, 620, 255, false)
  // triangle(380-waffle*2, 620, width/2-waffle*2, height/2, 420-waffle*2, 620, 255, false)
  // triangle(380-waffle*2, 620, width/2-waffle*2, height/2+40, 420-waffle*2, 620, 255, false)
  // triangle(330, 620, width/2-50, height/2, 370, 620, 255, false)
  // triangle(330, 620, width/2-50, height/2+40, 370, 620, 255, false)
  // triangle(380, 620, width/2, height/2, 420, 620, 255, false)
  // triangle(380, 620, width/2, height/2+40, 420, 620, 255, false)
  // triangle(430, 620, 450, height/2, 470, 620, 255, false)
  // triangle(430, 620, 450, height/2+40, 470, 620, 255, false)
  // triangle(480, 620, 500, height/2, 520, 620, 255, false)
  // triangle(480, 620, 500, height/2+40, 520, 620, 255, false)
  // triangle(530, 620, 550, height/2, 570, 620, 255, false)
  // triangle(530, 620, 550, height/2+40, 570, 620, 255, false)
  //row2b
  for(j=0; j<5; j++) {
    triangle(355+j*50, 645-waffle*2, 375+j*50, 625-waffle*2, 395+j*50, 645-waffle*2, 255, false)
    triangle(355-j*50, 645-waffle*2, 375-j*50, 625-waffle*2, 395-j*50, 645-waffle*2, 255, false)
    triangle(355+j*50, 645-waffle*2, 375+j*50, 665-waffle*2, 395+j*50, 645-waffle*2, 255, false)
    triangle(355-j*50, 645-waffle*2, 375-j*50, 665-waffle*2, 395-j*50, 645-waffle*2, 255, false)
  }
  //row2a
  for(j=0; j<5; j++) {
    triangle(355+j*50, 645-waffle, 375+j*50, 625-waffle, 395+j*50, 645-waffle, 255, false)
    triangle(355-j*50, 645-waffle, 375-j*50, 625-waffle, 395-j*50, 645-waffle, 255, false)
    triangle(355+j*50, 645-waffle, 375+j*50, 665-waffle, 395+j*50, 645-waffle, 255, false)
    triangle(355-j*50, 645-waffle, 375-j*50, 665-waffle, 395-j*50, 645-waffle, 255, false)
  }
  //row2
  for(j=0; j<4; j++) {
    triangle(355+j*50, 645, 375+j*50, 625, 395+j*50, 645, 255, false)
    triangle(355-j*50, 645, 375-j*50, 625, 395-j*50, 645, 255, false)
    triangle(355+j*50, 645, 375+j*50, 665, 395+j*50, 645, 255, false)
    triangle(355-j*50, 645, 375-j*50, 665, 395-j*50, 645, 255, false)
  }
  //row3
  // triangle(380-waffle*3, 620+waffle, width/2-waffle*3, height/2+waffle, 420-waffle*3, 620+waffle, 255, false)
  // triangle(380-waffle*3, 620+waffle, width/2-waffle*3, height/2+40+waffle, 420-waffle*3, 620+waffle, 255, false)
  // triangle(380-waffle*2, 620+waffle, width/2-waffle*2, height/2+waffle, 420-waffle*2, 620+waffle, 255, false)
  // triangle(380-waffle*2, 620+waffle, width/2-waffle*2, height/2+40+waffle, 420-waffle*2, 620+waffle, 255, false)
  // triangle(380-waffle, 620+waffle, width/2-waffle, height/2+waffle, 420-waffle, 620+waffle, 255, false)
  // triangle(380-waffle, 620+waffle, width/2-waffle, height/2+40+waffle, 420-waffle, 620+waffle, 255, false)
  // triangle(380, 620+waffle, width/2, height/2+waffle, 420, 620+waffle, 255, false)
  // triangle(380, 620+waffle, width/2, height/2+40+waffle, 420, 620+waffle, 255, false)
  // triangle(380+waffle, 620+waffle, width/2+waffle, height/2+waffle, 420+waffle, 620+waffle, 255, false)
  // triangle(380+waffle, 620+waffle, width/2+waffle, height/2+40+waffle, 420+waffle, 620+waffle, 255, false)
  // triangle(380+waffle*2, 620+waffle, width/2+waffle*2, height/2+waffle, 420+waffle*2, 620+waffle, 255, false)
  // triangle(380+waffle*2, 620+waffle, width/2+waffle*2, height/2+40+waffle, 420+waffle*2, 620+waffle, 255, false)
  // triangle(380+waffle*3, 620+waffle, width/2+waffle*3, height/2+waffle, 420+waffle*3, 620+waffle, 255, false)
  // triangle(380+waffle*3, 620+waffle, width/2+waffle*3, height/2+40+waffle, 420+waffle*3, 620+waffle, 255, false)
  //row4
  for(j=0; j<4; j++) {
    triangle(355+j*50, 645+waffle, 375+j*50, 625+waffle, 395+j*50, 645+waffle, 255, false)
    triangle(355-j*50, 645+waffle, 375-j*50, 625+waffle, 395-j*50, 645+waffle, 255, false)
    triangle(355+j*50, 645+waffle, 375+j*50, 665+waffle, 395+j*50, 645+waffle, 255, false)
    triangle(355-j*50, 645+waffle, 375-j*50, 665+waffle, 395-j*50, 645+waffle, 255, false)
  }
  //row5
  //row6
  for(j=0; j<4; j++) {
    triangle(355+j*50, 645+waffle*2, 375+j*50, 625+waffle*2, 395+j*50, 645+waffle*2, 255, false)
    triangle(355-j*50, 645+waffle*2, 375-j*50, 625+waffle*2, 395-j*50, 645+waffle*2, 255, false)
    triangle(355+j*50, 645+waffle*2, 375+j*50, 665+waffle*2, 395+j*50, 645+waffle*2, 255, false)
    triangle(355-j*50, 645+waffle*2, 375-j*50, 665+waffle*2, 395-j*50, 645+waffle*2, 255, false)
  }
  //row7
  //row8
  for(j=0; j<3; j++) {
    triangle(355+j*50, 645+waffle*3, 375+j*50, 625+waffle*3, 395+j*50, 645+waffle*3, 255, false)
    triangle(355-j*50, 645+waffle*3, 375-j*50, 625+waffle*3, 395-j*50, 645+waffle*3, 255, false)
    triangle(355+j*50, 645+waffle*3, 375+j*50, 665+waffle*3, 395+j*50, 645+waffle*3, 255, false)
    triangle(355-j*50, 645+waffle*3, 375-j*50, 665+waffle*3, 395-j*50, 645+waffle*3, 255, false)
  }
  //row9
  //row10
  for(j=0; j<3; j++) {
    triangle(355+j*50, 645+waffle*4, 375+j*50, 625+waffle*4, 395+j*50, 645+waffle*4, 255, false)
    triangle(355-j*50, 645+waffle*4, 375-j*50, 625+waffle*4, 395-j*50, 645+waffle*4, 255, false)
    triangle(355+j*50, 645+waffle*4, 375+j*50, 665+waffle*4, 395+j*50, 645+waffle*4, 255, false)
    triangle(355-j*50, 645+waffle*4, 375-j*50, 665+waffle*4, 395-j*50, 645+waffle*4, 255, false)
  }
  //row11
  //row12
  for(j=0; j<3; j++) {
    triangle(355+j*50, 645+waffle*5, 375+j*50, 625+waffle*5, 395+j*50, 645+waffle*5, 255, false)
    triangle(355-j*50, 645+waffle*5, 375-j*50, 625+waffle*5, 395-j*50, 645+waffle*5, 255, false)
    triangle(355+j*50, 645+waffle*5, 375+j*50, 665+waffle*5, 395+j*50, 645+waffle*5, 255, false)
    triangle(355-j*50, 645+waffle*5, 375-j*50, 665+waffle*5, 395-j*50, 645+waffle*5, 255, false)
  }
  //row13
  //row14
  for(j=0; j<2; j++) {
    triangle(355+j*50, 645+waffle*6, 375+j*50, 625+waffle*6, 395+j*50, 645+waffle*6, 255, false)
    triangle(355-j*50, 645+waffle*6, 375-j*50, 625+waffle*6, 395-j*50, 645+waffle*6, 255, false)
    triangle(355+j*50, 645+waffle*6, 375+j*50, 665+waffle*6, 395+j*50, 645+waffle*6, 255, false)
    triangle(355-j*50, 645+waffle*6, 375-j*50, 665+waffle*6, 395-j*50, 645+waffle*6, 255, false)
  }
  //row15
  //row16
  for(j=0; j<2; j++) {
    triangle(355+j*50, 645+waffle*7, 375+j*50, 625+waffle*7, 395+j*50, 645+waffle*7, 255, false)
    triangle(355-j*50, 645+waffle*7, 375-j*50, 625+waffle*7, 395-j*50, 645+waffle*7, 255, false)
    triangle(355+j*50, 645+waffle*7, 375+j*50, 665+waffle*7, 395+j*50, 645+waffle*7, 255, false)
    triangle(355-j*50, 645+waffle*7, 375-j*50, 665+waffle*7, 395-j*50, 645+waffle*7, 255, false)
  }
  //row17
  //row18
  for(j=0; j<2; j++) {
    triangle(355+j*50, 645+waffle*8, 375+j*50, 625+waffle*8, 395+j*50, 645+waffle*8, 255, false)
    triangle(355-j*50, 645+waffle*8, 375-j*50, 625+waffle*8, 395-j*50, 645+waffle*8, 255, false)
    triangle(355+j*50, 645+waffle*8, 375+j*50, 665+waffle*8, 395+j*50, 645+waffle*8, 255, false)
    triangle(355-j*50, 645+waffle*8, 375-j*50, 665+waffle*8, 395-j*50, 645+waffle*8, 255, false)
  }
  //rectangle(0,0,100,100,255,0)
  //outline
  triangle(width/2-200, 500, width/2, 1100, width/2+200, 500, false, 0, 10)
  // ellipse(width/2, 1085, 10, 10, 0, 255, 3)
  // ellipse(width/2, 1087, 15, 15, false, 255, 3)
  // rectangle(300, 1000, 20, 2, 0, false)
};
function iceCream() {
  ellipse(width/2,418,450,400,0,false)
};
function bkgd() {
  rectangle(100, 500, 600, 700, 255, false)
};
function sprinkles() {
  for(i=0; i<30; i++) {
    rectangle(Rune.random(220, 600), Rune.random(250, 350), 5, 20, 255, false, Rune.random(0, 360))
  }
};
// function label() {
//   rectangle(1, 500, 70, 700, false, 0)
//   rectangle(81, 500, 70, 700, false, 0)
// };

iceCream()
bkgd()
sprinkles()
cone()
// label()

//ellipse(width/2,400,450,400)
// triangle(0, 0, 100, 100, 200, 200)





r.draw();