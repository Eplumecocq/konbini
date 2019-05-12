import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import withSizes from 'react-sizes';

import { Container } from './style/layout';
import { theme } from './style/theme';
import Home from './components/Home';
import SearchResults from './components/Search/SearchResults';

function App({ isMobile }) {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container>
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Home {...props} isMobile={isMobile} />}
            />
            <Route
              path="/search"
              render={props => <SearchResults {...props} isMobile={isMobile} />}
            />
          </Switch>
        </Container>
        <GlobalStyle />
      </Router>
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    font-family: 'Montserrat', sans-serif;
    font-size: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    color: ${({ theme }) => theme.darkGrey};
    *, *:before, *:after {
      box-sizing: inherit;
    }
  }
`;

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 737,
});

export default withSizes(mapSizesToProps)(App);
