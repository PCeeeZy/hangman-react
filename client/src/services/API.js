import axios from 'axios';

export default {
    scrapeWords: () => {
        return axios.get('api/scrape')
    },

    getWords: () => {
        return axios.get('/api/scrape')
    },
    getWordById: (id) => {
        return axios.get(`/api/words/${id}`)
    }
};