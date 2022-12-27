import { galleryItems } from "./gallery-items.js";
// Change code below this line
const div = document.querySelector(".gallery");
const item = galleryItems
  .map(
    (obj) => `
  <a class="gallery__item" href="${obj.original}">
  <img class="gallery__image  lazyload" src="${obj.preview}" alt="${obj.description}" />
</a>`
  )
  .join("");

div.insertAdjacentHTML("beforeend", item);

new SimpleLightbox(".gallery a", {
  disableRightClick: true,
  scrollZoom: false,
  captionDelay: 250,
  captionsData: "alt",
});
