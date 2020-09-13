export async function getGeneros(setGeneros) {
  const generos = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
    .then(res => res.json())
    .then(
      (result) => setGeneros(result.genres)
    )
}

//pegar filmes pelo id do genero