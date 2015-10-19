//3 color excercise

var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 1500,
  debug: true
});

function drawing(){
  var rand = Rune.random(0, 360)
  r.rect(0, 0, 800, 1500)
    .fill('hsv', rand, 50, 70, 1)
    .stroke(false)
  r.rect(100, 100, 500, 1000)
    .fill('hsv', 100, 50, 100, 1)
    .stroke(false)
  r.rect(200, 200, 200, 500)
    .fill('hsv', 10, 50, 100, 1)
    .stroke(false)
};
drawing();

r.draw();