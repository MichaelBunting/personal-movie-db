import axios from 'axios';

class MovieModel {
    getMovies(query, callback) {
        axios.get(`/getMovies/${query}`)
            .then(data => {
                let sortedMovies = data.data.results.sort((a, b) => {
                    return a.popularity < b.popularity ? 1 : -1;
                });
                let searchResults = sortedMovies.slice(0, 5);

                callback(searchResults);
            })
    }
}

export default new MovieModel();