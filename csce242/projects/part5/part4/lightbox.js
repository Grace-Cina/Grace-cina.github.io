document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("lightboxClose");

  // Select all gallery images
  const galleryImages = document.querySelectorAll(".gallery-grid img");

  const openLightbox = (img) => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || "Gallery image";
    lightbox.classList.add("show");
  };

  const closeLightbox = () => {
    lightbox.classList.remove("show");
    lightboxImg.src = "";
  };

  galleryImages.forEach(img => {
    img.style.cursor = "pointer";
    img.addEventListener("click", (e) => {
      e.preventDefault();
      openLightbox(img);
    });
  });

  // Close on button
  closeBtn.addEventListener("click", closeLightbox);

  // Close if you click outside image
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Close with ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
});