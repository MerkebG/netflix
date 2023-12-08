// const API_KEY = "665a90cc0093e3a7c94dc4f21e5caa31";

const API_KEY = "665a90cc0093e3a7c94dc4f21e5caa31";

const requests = {
  // Define endpoints for different genres
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
};

// Fetch movies by genre
// You can use these endpoints with your fetch function to retrieve movies of specific genres

export default requests;
