const images = [
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2017/06/04/21/36/moody-2372252__480.jpg',
    original: 'https://cdn.pixabay.com/photo/2017/06/04/21/36/moody-2372252_1280.jpg',
    description: 'Flowers2',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2017/06/05/08/08/orchids-2373204__480.jpg',
    original: 'https://cdn.pixabay.com/photo/2017/06/05/08/08/orchids-2373204_1280.jpg',
    description: 'Flowers3',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2020/06/26/06/34/macro-5341818__480.jpg',
    original: 'https://cdn.pixabay.com/photo/2020/06/26/06/34/macro-5341818_1280.jpg',
    description: 'Flowers4',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2020/06/28/13/53/macro-5349373__480.jpg',
    original: 'https://cdn.pixabay.com/photo/2020/06/28/13/53/macro-5349373_1280.jpg',
    description: 'Flower5',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2020/06/26/06/34/clover-5341820__480.jpg',
    original: 'https://cdn.pixabay.com/photo/2020/06/26/06/34/clover-5341820_1280.jpg',
    description: 'Flowers6',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2020/06/28/18/21/rose-on-a-green-background-5350264__480.jpg',
    original: 'https://cdn.pixabay.com/photo/2020/06/28/18/21/rose-on-a-green-background-5350264_1280.jpg',
    description: 'Flowers7',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2020/06/28/18/17/colour-5350257__480.jpg',
    original: 'https://cdn.pixabay.com/photo/2020/06/28/18/17/colour-5350257_1280.jpg',
    description: 'Flowers8',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2020/01/02/17/52/pion-4736447__480.jpg',
    original: 'https://cdn.pixabay.com/photo/2020/01/02/17/52/pion-4736447_1280.jpg',
    description: 'Flowers9',
  },

];

const refs = {
  gallery: document.querySelector('.gallery'),
};

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery-item">
          <a class="gallery-link" href="${original}">
            <img class="gallery-image" src="${preview}" alt="${description}" />
          </a>
        </li>`
    )
    .join('');
}

refs.gallery.innerHTML = createMarkup(images);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = new SimpleLightbox('.gallery-item a', {
  captionsData: 'alt',
  captionDelay: 250,
});
