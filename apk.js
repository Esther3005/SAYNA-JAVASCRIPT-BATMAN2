var images = document.querySelectorAll(".justice img");
var scroll=document.querySelectorAll(".scroll")
let scroolbar=document.querySelector(".scroolbar")
var index = 0;
function changeImage() {
  images[index].classList.remove("active");
  index = (index + 1) % images.length;
  images[index].classList.add("active");
}
setInterval(changeImage, 5000);

var nemesis=document.getElementById('nemesis');
var cinema=document.getElementById('cinema');
var allies=document.getElementById('allies');
function display() {
  window.addEventListener('scroll',()=>{
    if(window.scrollY>50){
      nemesis.style.visibility='visible';
      cinema.style.visibility='visible';
      allies.style.visibility='visible'; 
    }
  });
  
}
setTimeout(display,2000);


