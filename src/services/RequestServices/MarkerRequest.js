import * as axios from 'axios';

export const MarkerRequest = {
    async getMarkers(extension) {
        return await axios.post('https://api.marktube.tv/v1/me', {});
      }
}