(function() {
  Array.prototype.size = function() {
    var length = 0;
    for (var i = 0; i < this.length; i++) {
      length++;
    }
    return length;
  };

  Array.prototype.concat = function(otherArray) {
    var thisElements = this;
    var otherElements = otherArray;
    var combined = [thisElements, otherElements];
    var tmp = [];
    for (var i = 0; i < combined.size(); i++) {
      for (var j = 0; j < combined[i].size(); j++) {
        tmp.push(combined[i][j]);
      }
    }
    for (var i = 0; i < tmp.size(); i++) {
      this[i] = tmp[i];
    }
    return this;
  };
})();