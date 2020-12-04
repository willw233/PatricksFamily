

//Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".family").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".family")[i].addEventListener("click", function () {
  
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

//Detecting Keyboard Press

document.addEventListener("keydown", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

function makeSound(key) {

  switch (key) {
    case "dad":
      var tom1 = new Audio("sounds/will.mp3");
      tom1.play();
      break;
      
    case "mom":
      var tom2 = new Audio("sounds/videoplayback.mp4");
      tom2.play();
      break;
  
    case "grandma":
      var tom3 = new Audio("sounds/grandmasvoice.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
      
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
      
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
  
    default: 
  
    }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
  

