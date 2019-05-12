import React from 'react';

import { HomeWrapper } from './style';
import { Title } from '../../style/layout';
import Search from '../Search';

const Home = ({ isMobile }) => (
  <HomeWrapper direction="column" wrap="wrap">
    <Title>Konbini explorer</Title>
    <Search isMobile={isMobile} />
  </HomeWrapper>
);

export default Home;
