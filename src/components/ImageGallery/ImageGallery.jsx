import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import { GalleryBox, GalleryItem } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <GalleryBox>
      {images.map(item => (
        <GalleryItem key={item.id}>
          <ImageGalleryItem
            source={item.webformatURL}
            alt={item.tags}
            largeImg={item.largeImageURL}
          />
        </GalleryItem>
      ))}
    </GalleryBox>
  );
};
