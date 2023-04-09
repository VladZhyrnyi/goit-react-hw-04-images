import { useState } from 'react';
import {
  Header,
  Form,
  SearchBtn,
  SearchBtnIcon,
  SearchInput,
} from './Searchbar.styled';

export const Searchbar = ({onSubmit}) => {
  const [query, setQuery] = useState('');

  const handleInput = event => {
    setQuery(event.currentTarget.value.trim());
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(query);
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <SearchBtn type="submit">
          <SearchBtnIcon />
        </SearchBtn>

        <SearchInput
          onChange={handleInput}
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          value={query}
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
};
