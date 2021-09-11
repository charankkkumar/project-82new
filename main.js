var mouseEvent="empty";
var lastx,lasty;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line=2;
canvas.addEventListener("mousedown",md);
function md(e)
{
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width").value;
    
    mouseEvent="mousedown";
}
canvas.addEventListener("mousemove",mv);
function mv(e)
{
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.moveTo(lastx,lasty);
        ctx.lineTo(current_x,current_y);
        ctx.stroke()
}
lastx=current_x;
lasty=current_y;}
canvas.addEventListener("mouseup",mu);
function mu(e)
{
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseLeave",ml)
function ml(e)
{
    mouseEvent="mouseleave";
}
function ClearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)};