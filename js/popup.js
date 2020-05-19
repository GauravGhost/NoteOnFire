var box = document.getElementById("box");

// Get the button that opens the box
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the box
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the box
btn.onclick = function() {
  box.style.display = "block";
}

// When the user clicks on <span> (x), close the box
span.onclick = function() {
  box.style.display = "none";
}

// When the user clicks anywhere outside of the box, close it
window.onclick = function(event) {
  if (event.target == box) {
    box.style.display = "none";
  }
}