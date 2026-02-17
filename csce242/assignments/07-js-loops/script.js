const container = document.getElementById("bubbles");

const random = (min,max)=>Math.random()*(max-min)+min;

window.addEventListener("DOMContentLoaded",()=>{

  // REQUIRED: for loop to create bubbles
  for(let i=0;i<25;i++){

    const bubble=document.createElement("div");
    bubble.className="bubble";

    const size=random(10,28);
    const x=random(0,100);
    const duration=random(4,9);
    const delay=random(0,5);

    bubble.style.width=size+"px";
    bubble.style.height=size+"px";
    bubble.style.left=x+"%";
    bubble.style.animationDuration=duration+"s";
    bubble.style.animationDelay=delay+"s";
    bubble.style.opacity=random(.3,.8);

    container.appendChild(bubble);
  }

});