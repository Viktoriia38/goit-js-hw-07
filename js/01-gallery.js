import { galleryItems } from "./gallery-items.js";
// Change code below this line

const div = document.querySelector(".gallery");

function createMarkup(array) {
  const result = array
    .map(({ preview, original, description }) => {
      return `<div class="gallery" <a class="gallery__link" href="${original}">
    <img
      class="gallery__image lazyload"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a> </div>`;
    })
    .join("");
  return result;
}
const items = createMarkup(galleryItems);
div.insertAdjacentHTML("beforeend", items);
console.log(items);

div.addEventListener("click", clickOpenImage);

function clickOpenImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
<img src="${event.target.dataset.source}">
`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", pressEscToCloseImage);
      },

      onClose: (instance) => {
        document.removeEventListener("keydown", pressEscToCloseImage);
      },
    }
  );
  instance.show();
  function pressEscToCloseImage(event) {
    if (event.code === "Escape") {
      instance.close();
      console.log(event.code);
    }
  }
}
