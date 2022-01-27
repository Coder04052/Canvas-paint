var mouseEvent="empty";
var lp_x,lp_y;
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
color="purple";
var width=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    cp_mouseX=e.clientX-canvas.offsetLeft;
    cp_mouseY=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
ctx.beginpath()
ctx.strokeStyle=color;
ctx.lineWidth=width;
console.log("last position of x and y =");
console.log("X="+lp_x+",Y="+lp_y);
ctx.moveTo(lp_x,lp_y);
console.log("current position of x and y =");
console.log("X="+cp_mouseX+",Y="+cp_mouseY);
ctx.lineTo(cp_mouseX,cp_mouseY);
ctx.stroke();
 }
 lp_x=cp_mouseX;
 lp_y=cp_mouseY;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseEvent="mouseLeave";
}