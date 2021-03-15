/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

var dragValue;

function move(id) {
  var element = document.getElementById("theDiv");
  element.style.position = "absolute";
  element.onmousedown = function() {
    dragValue = element;
  };
}

document.onmouseup = function(e) {
  dragValue = null;
};

document.onmousemove = function(e) {
  var x = e.pageX;
  var y = e.pageY;

  dragValue.style.left = x + "px";
  dragValue.style.top = y + "px";
};
