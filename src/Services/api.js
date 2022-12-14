import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c86633d198b2023a18dd77350f0e9072';

export async function fetchTrendingMovies(page = 1) {
  const response = await axios.get(
    `${BASE_URL}trending/all/week?api_key=${API_KEY}&page=${page}`
  );
  return response.data.results;
}

export async function fetchUpcomingMovies(page = 1) {
  const response = await axios.get(
    `${BASE_URL}/movie/upcoming/?api_key=${API_KEY}&page=${page}`
  );
  return response.data.results;
}

export async function fetchTopRatedMovies(page = 1) {
  const response = await axios.get(
    `${BASE_URL}/movie/top_rated/?api_key=${API_KEY}&page=${page}`
  );
  return response.data.results;
}

// export async function fetchMoviebyId(movieId) {
//   const trendingMovies = await fetchTrendingMovies();
//   return trendingMovies.find(movie => movie.id === movieId);
// }

export async function fetchConfig() {
  const response = await axios.get(
    `${BASE_URL}configuration?api_key=${API_KEY}`
  );
  return response.data.images;
}

export async function fetchMovieDetails(movieId) {
  const response = await axios.get(`${BASE_URL}movie/${movieId}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      append_to_response: 'credits,reviews,videos',
    },
  });

  return response.data;
}

export async function fetchMovieByQuery(page, query) {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      query: query,
      page: page,
    },
  });

  return response.data.results;
}
