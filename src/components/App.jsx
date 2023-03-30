import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar';

export class App extends Component {
  state = {
    searchQuery: ''    
  };

  onSearchSubmit = (query) => {
    this.setState({searchQuery: query})
  }

  render() {
    const { searchQuery } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSearchSubmit}/>
        <ImageGallery sQuery={searchQuery}/>
      </>
    );
  }
}
