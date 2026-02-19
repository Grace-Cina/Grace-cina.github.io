const water = document.getElementById("water");

const rand = (min, max) => Math.random() * (max - min) + min;

const makeBubble = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");

  // Random size
  const size = rand(6, 16);
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;

  // Random X position within the water
  const waterWidth = water.clientWidth;
  const x = rand(0, Math.max(0, waterWidth - size));
  bubble.style.left = `${x}px`;

  // Random rise distance, duration, and delay
  const rise = rand(water.clientHeight * 0.6, water.clientHeight * 1.05);
  const dur = rand(2.2, 6.0);
  const delay = rand(0, 2.5);

  bubble.style.setProperty("--rise", `${rise}px`);
  bubble.style.setProperty("--dur", `${dur}s`);
  bubble.style.setProperty("--delay", `${delay}s`);

  // Slight opacity variation
  bubble.style.opacity = `${rand(0.55, 0.95)}`;

  water.appendChild(bubble);
};

const buildBubbles = (count) => {
  // REQUIRED: use a for loop to create bubbles
  for (let i = 0; i < count; i++) {
    makeBubble();
  }
};

const start = () => {
  // Clear if reloaded
  water.innerHTML = "";

  // Create initial set (you can tweak count)
  buildBubbles(18);

  // Optional: add new bubbles over time for a more “random” feel
  setInterval(() => {
    // add 1–2 bubbles occasionally
    const extra = Math.random() < 0.6 ? 1 : 2;
    buildBubbles(extra);

    // keep DOM from growing forever
    const maxBubbles = 40;
    while (water.children.length > maxBubbles) {
      water.removeChild(water.firstElementChild);
    }
  }, 900);
};

window.addEventListener("load", start);