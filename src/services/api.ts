import axios from 'axios';

const dataBaseURL = 'https://jsonplaceholder.typicode.com/';

 const api = axios.create({
    baseURL: dataBaseURL
});

export default api;