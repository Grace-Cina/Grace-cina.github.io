console.log("JS IS WORKING");



/* ---------------------------
   GEOMETRY
---------------------------- */
const geometryCard = document.getElementById("geometryCard");
const triangle = document.getElementById("triangle");

geometryCard.addEventListener("click", () => {
  triangle.classList.toggle("hidden");
});

/* ---------------------------
   DATE PICKER
---------------------------- */

const dateInput = document.getElementById("dateInput");
const dateOutput = document.getElementById("dateOutput");

dateInput.addEventListener("change", () => {
  const [year, month, day] = dateInput.value.split("-");

  dateOutput.textContent = `You picked the date: ${month}/${day}/${year}`;
  });
/* ---------------------------
   IMAGE CHANGE + FRAME
---------------------------- */
const sunImage = document.getElementById("sunImage");
const imageFrame = document.getElementById("imageFrame");

let isSunny = false;

sunImage.addEventListener("click", () => {
  isSunny = !isSunny;
  sunImage.src = isSunny ? "happy-sun.png" : "happy-sun.png";
  imageFrame.classList.toggle("active");
});



