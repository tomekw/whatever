window.onload = function() {
  var c = document.getElementById("drawing-board");
  var ctx = c.getContext("2d");
  c.addEventListener('mousedown', startDraw);
  c.addEventListener('mouseup', endDraw);

  var isDrawing = false;

  function startDraw(e) {
    isDrawing = true;
    var delta = 0.02;
    c.addEventListener('mousemove', function(drag) {
      if (isDrawing) {
        var x = drag.pageX - c.offsetLeft,
            y = drag.pageY - c.offsetTop;
        var radsInCircle = 2*Math.PI;
        var angle = delta*radsInCircle;
        delta += 0.02;
        var length = 20;
        var endpoints = [{x: x+Math.sin(angle)*length,    y: y+Math.cos(angle)*length},
                         {x: x+Math.sin(angle)*(-length), y: y+Math.cos(angle)*(-length)}];

        ctx.beginPath();
        ctx.moveTo(endpoints[0].x, endpoints[0].y);
        ctx.lineTo(endpoints[1].x, endpoints[1].y);
        ctx.stroke();
      }
    });

  };

  function endDraw(e) {
    isDrawing = false;
  };
};