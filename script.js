const world = document.querySelector("#world");
const changeButton = document.querySelector("#changeButton");
const buttonText = document.querySelector("#buttonText");
const instructionText = document.querySelector("#instructionText");
const worldStatus = document.querySelector("#worldStatus");
const motionToggle = document.querySelector("#motionToggle");

let isOpen = false;

changeButton.addEventListener("click", () => {
  isOpen = !isOpen;
  world.classList.toggle("is-open", isOpen);
  changeButton.setAttribute("aria-pressed", String(isOpen));

  if (isOpen) {
    buttonText.textContent = "THE WORLD HAS CHANGED";
    instructionText.textContent = "The creature stayed the same. The path changed.";
    worldStatus.innerHTML = 'SYSTEM STATUS <span>ADAPTIVE</span>';
  } else {
    buttonText.textContent = "MAKE ROOM";
    instructionText.textContent = "The path was built for someone else.";
    worldStatus.innerHTML = 'SYSTEM STATUS <span>RIGID</span>';
  }
});

motionToggle.addEventListener("click", () => {
  const reduced = document.body.classList.toggle("reduce-motion");
  motionToggle.textContent = reduced ? "MOTION: OFF" : "MOTION: ON";
  motionToggle.setAttribute("aria-pressed", String(reduced));
});

// If the visitor prefers reduced motion at system level, respect it.
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.body.classList.add("reduce-motion");
  motionToggle.textContent = "MOTION: OFF";
  motionToggle.setAttribute("aria-pressed", "true");
}
