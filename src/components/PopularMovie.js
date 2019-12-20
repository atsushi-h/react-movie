import React, { useEffect } from 'react'
import MovieCard from './MovieCard'

const PopularMovie = props => {
  useEffect(() => {
    props.onMount()
  }, [])

  const movieList = props.popularMovies.popularMovies.map(movie => {
    return (
      <MovieCard
        key={movie.id}
        title={movie.title}
        overview={movie.overview}
        poster_path={movie.poster_path}
      />
    )
  })

  return (
    <>
      {movieList}
    </>
  )
}

export default PopularMovie
