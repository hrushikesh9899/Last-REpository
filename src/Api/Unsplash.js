import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID U_Xg10Q1dIy_NEEV-kKMtx_tIGNfWNhcmh9xzPL3c2g'
    }
})