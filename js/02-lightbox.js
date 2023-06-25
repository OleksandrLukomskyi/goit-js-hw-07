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

  var lightbox = new SimpleLightbox(".gallery a", {
    /* options */
    captionsData: "alt",
    captionDelay: 250,
  });
}
