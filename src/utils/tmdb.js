export function teste(query) {
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${query}`)
    .then(res => res.json())
    .then(
      (result) => {
        //OIASDISADHIODAS
      }
    )
}