// Sakura Stream JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // Welcome alert
  alert("🌸 Welcome to Sakura Stream!");

  // Change background gradient dynamically
  const colors = [
    "linear-gradient(to bottom, #ffdde1, #ee9ca7)",
    "linear-gradient(to bottom, #ffb6c1, #ffc0cb)",
    "linear-gradient(to bottom, #ffe4e1, #ffb6c1)"
  ];
  let i = 0;
  setInterval(() => {
    document.body.style.background = colors[i];
    i = (i + 1) % colors.length;
  }, 5000); // changes every 5 seconds

  // Sakura petal animation
  for (let j = 0; j < 20; j++) {
    createPetal();
  }
});

function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 5 + Math.random() * 5 + "s"; // fall speed
  petal.style.opacity = Math.random();
  petal.style.fontSize = Math.random() * 10 + 10 + "px";
  petal.innerHTML = "🌸";
  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
    createPetal();
  }, 10000);
}
