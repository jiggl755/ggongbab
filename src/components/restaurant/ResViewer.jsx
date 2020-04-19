import React from 'react';
import Responsive from '../common/Responsive';
import styled from 'styled-components';

const ResViewBlock = styled(Responsive)`
  background-color: #ff5b35;
  width: 30%;
  height: -webkit-fill-available;
  align-items: center;
  justify-content: center;
  float: left;
  z-index: 100;
`;

const ResViewer = () => {
  return <ResViewBlock></ResViewBlock>;
};

export default ResViewer;
