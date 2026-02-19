const water = document.getElementById("water");

const rand = (min,max)=>Math.random()*(max-min)+min;

const makeBubble = ()=>{
  const b=document.createElement("div");
  b.className="bubble";

  const size=rand(6,14);
  b.style.width=size+"px";
  b.style.height=size+"px";

  b.style.left=rand(0,water.clientWidth-size)+"px";

  b.style.animationDuration=rand(3,6)+"s";
  b.style.animationDelay=rand(0,3)+"s";

  water.appendChild(b);
};

const buildBubbles=()=>{
  for(let i=0;i<20;i++){   // REQUIRED FOR LOOP
    makeBubble();
  }
};

window.onload=buildBubbles;