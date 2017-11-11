import axios from 'axios';

const MovieModel = {
  getMovies: (query, callback) => {
    axios.get(`/getMovies/${query}`)
      .then((data) => {
        const sortedMovies = data.data.results.sort((a, b) => (
          a.popularity < b.popularity ? 1 : -1
        ));

        const searchResults = sortedMovies.slice(0, 5);

        callback(searchResults);
      });
  },
};

export default MovieModel;
