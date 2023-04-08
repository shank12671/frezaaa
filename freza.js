const heartContainer = document.getElementById("hearts-container");
const heartCountInput = document.getElementById("heart-count");
const heartSizeInput = document.getElementById("heart-size");
const animationSpeedInput = document.getElementById("animation-speed");
const promptButton = document.getElementById("prompt-button");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * heartContainer.clientWidth + "px";
  heart.style.animationDuration = animationSpeedInput.value + "s";
  heart.style.width = heartSizeInput.value + "px";
  heart.style.height = heartSizeInput.value + "px";
  heartContainer.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, parseInt(heart.style.animationDuration) * 1000);
}

function handlePrompt() {
  const response = prompt("What would you like to say to Freza?");
  if (response) {
    alert(`You said: "${response}"`);
  }
}

heartCountInput.addEventListener("change", () => {
  while (heartContainer.firstChild) {
    heartContainer.removeChild(heartContainer.firstChild);
  }
  for (let i = 0; i < heartCountInput.value; i++) {
    createHeart();
  }
});

heartSizeInput.addEventListener("input", () => {
  const hearts = heartContainer.querySelectorAll(".heart");
  hearts.forEach((heart) => {
    heart.style.width = heartSizeInput.value + "px";
    heart.style.height = heartSizeInput.value + "px";
  });
});

promptButton.addEventListener("click", handlePrompt);
