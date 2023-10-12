window.addEventListener("deviceorientation", on_device_orientation);
function on_device_orientation(evt)
{
var alpha = evt.alpha;
var beta = evt.beta;
var gamma = evt.gamma;

document.getElementById("a").innerHTML = "alpha = "+alpha;
document.getElementById("b").innerHTML = "beta = "+beta;
document.getElementById("c").innerHTML = "gamma = "+gamma;

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
var centru = {x:canvas.width/2, y:canvas.height/2}
var latura_patrat = 50;
  
context.clearRect(0,0,canvas.width, canvas.height);
context.fillStyle = "#6A0888";
context.fillRect(180, 150,evt.gama, 50);
}
