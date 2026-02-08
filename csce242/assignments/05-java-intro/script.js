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
   IMAGE FRAME TOGGLE
---------------------------- */
const sunImage = document.getElementById("sunImage");
const imageFrame = document.getElementById("imageFrame");

sunImage.addEventListener("click", () => {
  imageFrame.classList.toggle("active");
});





