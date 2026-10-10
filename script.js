
var heading = document.getElementById("heading");
var mouseBox = document.getElementById("mouseBox");

mouseBox.onmouseover = function() {
    heading.style.display = "block";
};

mouseBox.onmouseout = function() {
    heading.style.display = "none";
};
