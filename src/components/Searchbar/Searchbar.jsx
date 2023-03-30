import { Component } from 'react';
import {
  Header,
  Form,
  SearchBtn,
  SearchBtnIcon,
  SearchInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = { query: '' };

  handleInput = event => {
    const { value } = event.currentTarget;

    this.setState({ query: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.query.trim());
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <SearchBtn type="submit">
            <SearchBtnIcon />
          </SearchBtn>

          <SearchInput
            onChange={this.handleInput}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.query}
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}
