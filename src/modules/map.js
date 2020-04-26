import React from 'react';
import { RenderAfterNavermapsLoaded, NaverMap} from 'react-naver-maps'
import Markers from '../components/map/Markers'

const map = () => {
  const navermaps = window.naver.maps;
  return (
    <RenderAfterNavermapsLoaded clientId="{process.env.REACT_APP_MAP_SERVICE_KEY}">
    <NaverMap 
      id='maps'
      style={{
        width: '100%',
        height: '100%',
      }}
      defaultCenter={new navermaps.LatLng(37.4969141, 127.0267015)}
      defaultZoom={16}
    >
      <Markers />
    </NaverMap>
 </RenderAfterNavermapsLoaded>
  );
};

export default map;