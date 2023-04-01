import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PixabayAPI from 'js/pixabay-api';
import { ThreeDots } from 'react-loader-spinner';
import { LoadMoreBtn } from 'components/Button/Button';
import { GalleryWrapper, GalleryBox, GalleryItem } from './ImageGallery.styled';

const initialState = {
  images: [],
  total: 0,
  page: 1,
  isLoading: false,
  error: '',
};

export class ImageGallery extends Component {
  state = { ...initialState };

  async getImages() {
    this.setState({ isLoading: true });

    const { page } = this.state;
    const { sQuery } = this.props;

    try {
      const images = await PixabayAPI.fetchImages(sQuery, page);

      if (images.hits.length === 0) {
        this.setState({ error: `Sorry, we couldn't find any matches.` });
      }

      this.setState(state => ({
        images: [...state.images, ...images.hits],
        isLoading: false,
        page: state.page + 1,
        total: images.total,
      }));
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }

  componentDidUpdate(prevProps) {
    const prevSQuery = prevProps.sQuery;
    const { sQuery } = this.props;

    if (prevSQuery !== sQuery) {
      this.setState(initialState, this.getImages);
    }
  }

  handleLoadMore = () => {
    this.getImages();
  };

  render() {
    const { images, isLoading, total, error } = this.state;

    return (
      <GalleryWrapper>
        {error && <div>{error}</div>}
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
        {images.length < total && <LoadMoreBtn onClick={this.handleLoadMore} />}
      </GalleryWrapper>
    );
  }
}
