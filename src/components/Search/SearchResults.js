import React, { useEffect, useState } from 'react';

import { ResultsWrapper, Result, Link } from './style';
import { Title } from '../../style/layout';
import searchNews from '../../searchNews';

function SearchResults({ isMobile }) {
  const params = new URLSearchParams(window.location.search);
  const querySearch = params.get('query').toString() || '';
  const [results, setResults] = useState([]);
  const limit = isMobile ? 3 : 8;

  useEffect(() => {
    if (querySearch) {
      searchNews(querySearch, limit).then(results => setResults(results));
    } else {
      setResults([]);
    }
  }, [querySearch, limit]);

  return (
    <ResultsWrapper direction="column" wrap="wrap">
      <Title>Résultats pour la recherche "{querySearch}"</Title>
      {results.map(({ id, title, link }) => (
        <Result key={id}>
          <Link target="blank" href={link}>
            {title.rendered}
          </Link>
        </Result>
      ))}
    </ResultsWrapper>
  );
}

export default SearchResults;
