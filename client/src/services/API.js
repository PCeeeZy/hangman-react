import axios from 'axios';

export default {
    getWords: () => {
        return axios.get('/api/words')
    },
    getWordById: (id) => {
        return axios.get(`/api/words/${id}`)
    }
};