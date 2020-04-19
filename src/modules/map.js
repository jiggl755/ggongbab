import React from 'react';
import { RenderAfterNavermapsLoaded, NaverMap, Marker} from 'react-naver-maps'

const map = () => {
  const navermaps = window.naver.maps;
  return (
    <RenderAfterNavermapsLoaded clientId="insertClinetKey">
    <NaverMap 
      id='maps'
      style={{
        width: '100%',
        height: '100%',
      }}
      defaultCenter={new navermaps.LatLng(37.4969141, 127.0267015)}
      defaultZoom={16}
    >
      <Marker 
        position={new navermaps.LatLng(37.4969144, 127.0267018)}
        onClick={() => {
          alert('onclick popup 추가')
        }}
      />
    </NaverMap>
 </RenderAfterNavermapsLoaded>
  );
};

export default map;