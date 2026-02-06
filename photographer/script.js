const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const cards = document.querySelectorAll(".card");

const openLightbox = (src, alt) => {
  lightboxImage.src = src;
  lightboxImage.alt = alt || "放大查看的作品";
  lightbox.classList.add("show");
  lightbox.setAttribute("aria-hidden", "false");
};

const closeLightbox = () => {
  lightbox.classList.remove("show");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
};

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const full = card.dataset.full;
    const img = card.querySelector("img");
    if (full && img) {
      openLightbox(full, img.alt);
    }
  });
});

lightbox.addEventListener("click", closeLightbox);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("show")) {
    closeLightbox();
  }
});
