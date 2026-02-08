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
   IMAGE CHANGE
---------------------------- */
const sunImage = document.getElementById("sunImage");
let isSunny = false;

sunImage.addEventListener("click", () => {
  isSunny = !isSunny;
  sunImage.src = isSunny ? "sunny.png" : "sun.png";
});
