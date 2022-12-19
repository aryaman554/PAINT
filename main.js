var mouseEvent = "empty";
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color="Red";
width_of_line = 2;
canvas.addEventListener("mousedown", my_mousedown);
function mymousedown(e) {
color = document.getElementById("color").value;
width_of_line = document.getElementById("width_of_line").value;
radius= document.getElementById("radius").value;
mouseEvent = "mouseDown";
}
canvas.addEventListener "mousemove", my_mousemove;
function my mousemove(e) 
var current_position_of_mouse_x= e.clientX - canvas.offsetLeft;
var current_position_of_mouse_y= e.clienty - canvas.offsetTop;
if(mouseEvent == "mouseDown") {
console.log("Current Position of X And Y Coordinates")
console.log("X = "+current_position_of_mouse_x+",Y= "+current_position_of_mouse_y);
ctx.benginPath();
ctx.strokeStyle= color;
ctx.lineWidth width_of_line;
ctx.arc (current_position_of_mouse_x, current_position_of_mouse_y, radius ,, 2 Math.PI);
ctx.stroke();
}

canvas.addEventListener("mouseup" my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseup";
    }
    canvas.addEventListener("mouse leave", my_mouse leave);
    function my mouse leave (e) {
    mouseEvent = "mouseleave";
    }
    function Clear_area() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);