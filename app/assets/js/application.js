window.onload = function() {
  var c = document.getElementById("drawing-board");
  var ctx = c.getContext("2d");

  window.addEventListener('resize', resizeCanvas, false);
  function resizeCanvas() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    c.addEventListener('mousedown', startDraw);
    c.addEventListener('mouseup', endDraw);
  }
  resizeCanvas();

  var update;

  function startDraw(e) {
    var grad = gradient("#1D4BAB", "#D03D44", 400).concat("#D03D44", "#D087D6", 400).concat("#D087D6", "#4087D6", 400);
    var incrementer = 1;
    var currentColorIndex = 0;
    var delta = 0.02;
    var x = e.pageX - c.offsetLeft,
        y = e.pageY - c.offsetTop;
    var previousLine = [];
    update = setInterval(function() {
      c.addEventListener('mousemove', function(drag){
        x = drag.pageX - c.offsetLeft,
        y = drag.pageY - c.offsetTop;
      }, false);
      var radsInCircle = 2*Math.PI;
      var angle = delta*radsInCircle;
      delta += 0.008;
      var maxLength = 60;
      var minLength = 48;
      var length = (Math.random()*maxLength) + minLength;
      var endpoints = [{x: x+Math.sin(angle)*length,    y: y+Math.cos(angle)*length},
                       {x: x+Math.sin(angle)*(-length), y: y+Math.cos(angle)*(-length)}];

      ctx.globalAlpha = Math.random();
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(endpoints[0].x, endpoints[0].y);
      ctx.lineTo(endpoints[1].x, endpoints[1].y);
      ctx.strokeStyle = grad[currentColorIndex];
      ctx.stroke();
      if (previousLine.length != 0) {
        ctx.fillStyle = grad[currentColorIndex];
        ctx.stokeStyle = grad[currentColorIndex];
        ctx.globalAlpha = 0.2;
        ctx.beginPath();
        ctx.moveTo(endpoints[0].x, endpoints[0].y);
        ctx.lineTo(endpoints[1].x, endpoints[1].y);
        ctx.lineTo(previousLine[1].x, previousLine[1].y);
        ctx.lineTo(previousLine[0].x, previousLine[0].y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
      previousLine = endpoints;
      currentColorIndex += incrementer;
      if (currentColorIndex == grad.length || currentColorIndex == 0) {
        incrementer = -incrementer;
      }
    }, 10);
  };

  function endDraw(e) {
    clearInterval(update);
  };

  function gradient(startColor, endColor, steps) {
    var start = {
      'Hex'   : startColor,
      'R'     : parseInt(startColor.slice(1,3), 16),
      'G'     : parseInt(startColor.slice(3,5), 16),
      'B'     : parseInt(startColor.slice(5,7), 16)
    }
    var end = {
      'Hex'   : endColor,
      'R'     : parseInt(endColor.slice(1,3), 16),
      'G'     : parseInt(endColor.slice(3,5), 16),
      'B'     : parseInt(endColor.slice(5,7), 16)
    }
    var diffR = end['R'] - start['R'];
    var diffG = end['G'] - start['G'];
    var diffB = end['B'] - start['B'];

    var stepsHex  = new Array();
    var stepsR    = new Array();
    var stepsG    = new Array();
    var stepsB    = new Array();

    for (var i = 0; i <= steps; i++) {
      stepsR[i] = start['R'] + ((diffR / steps) * i);
      stepsG[i] = start['G'] + ((diffG / steps) * i);
      stepsB[i] = start['B'] + ((diffB / steps) * i);
      stepsHex[i] = '#' + Math.round(stepsR[i]).toString(16) + '' + Math.round(stepsG[i]).toString(16) + '' + Math.round(stepsB[i]).toString(16);
    }
    return stepsHex;
  };
};