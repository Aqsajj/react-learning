import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-api-3a41a.firebaseio.com/'
});

export default instance;