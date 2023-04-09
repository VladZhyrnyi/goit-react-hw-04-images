import { useCallback, useState, useEffect } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar';
import { GalleryWrapper } from './ImageGallery/ImageGallery.styled';
import { ThreeDots } from 'react-loader-spinner';
import { LoadMoreBtn } from 'components/Button/Button';
import PixabayAPI from 'js/pixabay-api';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }

    const getImages = async () => {
      setIsLoading(true);

      try {
        const fetchedImages = await PixabayAPI.getImages(query, page);

        if (fetchedImages.hits.length === 0) {
          setError(`Sorry, we couldn't find any matches.`);
        }

        setImages(prevImages => [...prevImages, ...fetchedImages.hits]);
        setTotal(fetchedImages.total);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getImages();
  }, [query, page]);

  const onSearchSubmit = useCallback((query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setError(null);
  }, []);

  return (
    <>
      <Searchbar onSubmit={onSearchSubmit} />
      <GalleryWrapper>
        {error && <div>{error}</div>}
        {images.length !== 0 && <ImageGallery images={images}/>}
        <ThreeDots
          height="40"
          width="60"
          radius="9"
          color="#3f51b5"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={isLoading}
        />
        {images.length < total && (
          <LoadMoreBtn onClick={() => setPage(page => page + 1)} />
        )}
      </GalleryWrapper>
    </>
  );
}
