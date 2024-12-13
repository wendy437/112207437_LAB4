// Select all drum buttons
const drumButtons = document.querySelectorAll(".drum");

// Function to play the corresponding sound
function playSound(key) {
  let audio;
  switch (key) {
    case "w":
      audio = new Audio("sounds/crash.mp3");
      break;
    case "a":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    case "s":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "j":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "k":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "l":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    default:
      return; // Exit if no valid key is pressed
  }
  audio.play();
}

// Function to animate the button
function animateButton(key) {
  const activeButton = document.querySelector(`.${key}`);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}

// Add click event listeners to each drum button
drumButtons.forEach(button => {
  button.addEventListener("click", function () {
    const buttonKey = this.classList[0];
    playSound(buttonKey);
    animateButton(buttonKey);
  });
});

// Add keydown event listener for keyboard presses
document.addEventListener("keydown", event => {
  playSound(event.key);
  animateButton(event.key);
});
