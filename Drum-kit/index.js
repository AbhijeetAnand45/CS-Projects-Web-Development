
let n = document.querySelectorAll(".drum").length;

for(let i=0;i<n;i++){

  //Detecting button press
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    
    let buttoninnerhtml = this.innerHTML;
    makesound(buttoninnerhtml);
    Addanimation(buttoninnerhtml);

  });

}


//Detecting keyboard press
document.addEventListener("keypress",function(event){
  makesound(event.key);
  Addanimation(event.key);
});

function makesound(key){
  switch (key) {
    case "a":
      let tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "s":
      let tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "d":
      let tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "f":
      let tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      let crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "k":
      let kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    case "l":
      let snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    default:
  }
}


function Addanimation(currentkey){
  var activekey=document.querySelector("."+currentkey);
  activekey.classList.add("pressed");
  setTimeout(function(){
    activekey.classList.remove("pressed");
  },100);
}
