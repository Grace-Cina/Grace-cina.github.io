const water = document.getElementById("water");

const random = (min,max) => Math.random()*(max-min)+min;

const createBubble = () => {
  const b = document.createElement("div");
  b.className = "bubble";

  const size = random(6,14);
  b.style.width = size+"px";
  b.style.height = size+"px";

  b.style.left = random(0, water.clientWidth-size)+"px";

  const speed = random(3,6);
  b.style.animationDuration = speed+"s";

  const delay = random(0,3);
  b.style.animationDelay = delay+"s";

  water.appendChild(b);
};

const makeBubbles = () => {
  for(let i=0;i<18;i++){   // REQUIRED FOR LOOP
    createBubble();
  }
};

window.onload = makeBubbles;