window.onload = function() {
  var c = document.getElementById("drawing-board");
  var ctx = c.getContext("2d");
  c.addEventListener('click', function(e) {
    var x = event.pageX - c.offsetLeft,
        y = event.pageY - c.offsetTop;
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
  });
};