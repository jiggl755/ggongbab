import React from 'react';
import styled from 'styled-components';
import Mapdiv from '../../modules/map';

const MapViewerBlock = styled.div`
  position: absolute;
  left: 0;
  top: 4rem;
  bottom: 0;
  right: 0;
  overflow: hidden;
  background-color: #fff4e6;
`;

const Map = styled.div`
  border: solid 1px #ff5b35;
  left: 30%;
  height: -webkit-fill-available;
  float: right;
  width: 68%;
  margin: 10px;
  position: absolute;
`;

const ResList = styled.div`
  background: #ff5b35;
  width: 30%;
  height: -webkit-fill-available;
  align-items: center;
  justify-content: center;
  float: left;
  z-index: 100;
`;

const ListButton = styled.button`
  background-color: #ff5b35;
  margin-left: 100%;
  margin-top: 20rem;
  width: 2rem;
  height: 3rem;
  border: #ff5b35;
`;

const MapViewer = () => {
  return (
    <MapViewerBlock>
      <ResList>
        <ListButton inverted={true}> >> </ListButton>
      </ResList>
      <Map>
        <Mapdiv />
      </Map>
    </MapViewerBlock>
  );
};

export default MapViewer;
