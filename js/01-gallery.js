import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createImageCardMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);
galleryContainer.addEventListener("click", onGalleryContainerClick);

function createImageCardMarkup(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`;
    })
    .join("");
}

function onGalleryContainerClick(evt) {
  evt.preventDefault();
  const isGalleryImage = evt.target.classList.contains("gallery__image");
  if (!isGalleryImage) {
    return;
  }

  //   const galleryEl = evt.target;
  //   const parentGalleryCard = galleryEl.closest(".gallery__link");
  //   console.log(parentGalleryCard);

  const imageUrl = evt.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${imageUrl}" width="800" height="600">
`);

  instance.show();
}
