import React from 'react';
import { Marker} from 'react-naver-maps'


const Markers = (props) => {
    const navermaps = props.map;

    return (
        <Marker 
        position={new navermaps.LatLng(37.4969144, 127.0267018)}
        onClick={() => {
          alert('onclick popup 추가')
        }}
      />
    );
};

export default Markers;