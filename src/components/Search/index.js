import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { Search as SearchIcon } from 'styled-icons/boxicons-regular/Search';
import {
  SearchWrap,
  Input,
  Button,
  Result,
  Link,
  SuggestionWrapper,
} from './style';
import useDebounce from '../../useDebounce';
import searchNews from '../../searchNews';

function Search({ history, isMobile }) {
  const [results, setResults] = useState([]);
  const [value, setValue] = useState('');
  const limit = isMobile ? 3 : 8;
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    if (debouncedValue) {
      searchNews(debouncedValue, limit).then(results => {
        setResults(results);
      });
    } else {
      setResults([]);
    }
  }, [debouncedValue, limit]);
  return (
    <div>
      <SearchWrap align="center" justify="center">
        <SearchIcon width="35" height="35" />
        <Input
          type="text"
          placeholder="Chercher un article"
          autoFocus
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <Button
          type="button"
          onClick={() => history.push(`/search?query=${value}`)}>
          Chercher
        </Button>
      </SearchWrap>
      {value.length !== 0 && (
        <SuggestionWrapper>
          {results.map(({ id, title, link }) => (
            <Result key={id}>
              <Link target="_blank" href={link}>
                {title.rendered}
              </Link>
            </Result>
          ))}
        </SuggestionWrapper>
      )}
    </div>
  );
}

export default withRouter(Search);
