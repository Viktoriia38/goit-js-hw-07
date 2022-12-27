import { galleryItems } from "./gallery-items.js";
// Change code below this line

const div = document.querySelector(".gallery");
const item = galleryItems
  .map(
    (obj) => `<a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${obj.preview}"
      data-source="${obj.original}"
      alt="${obj.description}"
    />
  </a>`
  )
  .join("");

div.insertAdjacentHTML("beforeend", item);
div.addEventListener("click", clickOpenImage);
div.addEventListener("keydown", pressEscToCloseImage);

function clickOpenImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
  		<img src="${event.target.dataset.source}">
  	`);
  instance.show();
}

function pressEscToCloseImage(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}
