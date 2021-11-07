import axios from 'axios';

var API_KEY = '23262939-6c0fd5a3da3fb9e3fdc7add54';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const imagesApi = {
    searchQuery: '',
    page: 0,

    fetchWithQuery(searchQuery = this.searchQuery) {
        this.searchQuery = searchQuery;
        this.page += 1;

        const searchParams = new URLSearchParams({
            key: API_KEY,
            q: searchQuery,
            page: this.page,
            per_page: 12,
            orientation: 'horizontal',
            mage_type: 'photo',
        });

        return axios.get(`?${searchParams}`).then(res => res.data.hits);
    },

    resetPage() {
        this.page = 0;
    },
};

export { imagesApi };
