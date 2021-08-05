
var iconcircle=document.querySelectorAll(".overlay-icon");
var iconborder=document.querySelectorAll(".overlay-icon-border");
var explode=document.querySelectorAll(".explode");
var image=document.querySelector(".servicesimage");
var a=document.querySelectorAll(".servicebox ");
var circlecontainer=document.querySelectorAll(".bg-circles-container");

function display(c){
  explode[c].classList.add("icon-explode");


  removeactive();
  removecircles();
  removecircleactive();
// setTimeout(function(){
  image.style.backgroundImage="url('images/"+c+".jpg')";

// },1000);
  a[c].classList.add("active");
  iconcircle[c].classList.add("glow");
  iconborder[c].classList.add("glow");
  circlecontainer[c].classList.add("circleactive")

  setTimeout(function(){

    explode[c].classList.remove("icon-explode");
  },900);


}

function removeactive(){
  for(var i=0;i<a.length;i++){
  a[i].classList.remove("active");
}
}
function removecircles(){
  for(var i=0;i<iconcircle.length;i++){
  iconcircle[i].classList.remove("glow");
  iconborder[i].classList.remove("glow");
}
}
function removecircleactive(){
  for(var i=0;i<circlecontainer.length;i++){
  circlecontainer[i].classList.remove("circleactive");

}
}
