'use strict';

const gallery = document.querySelector('.gallery__list');
const mainImage = document.querySelector('img[alt="main image"]');

gallery.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  e.preventDefault();

  mainImage.src = link.href;
});
