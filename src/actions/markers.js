import { MarkerRequest } from '../services/RequestServices';
import { 
    SHOW_DETAIL_ON_MAP,
    SHOW_MARKERS_ON_MAP
 } from '../constants/actionTypes';

 function showMarkersOnMap(){
     return {
         type: SHOW_MARKERS_ON_MAP
     }
 }

 function showDetailOnMap(){
     return{
         type: SHOW_DETAIL_ON_MAP
     }
 }