import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const StyledDiv = styled.div`
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Layout = ({ children }) => (
  <div>
    <Header />
    <StyledDiv>{children}</StyledDiv>
  </div>
);

export default Layout;
