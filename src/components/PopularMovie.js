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
        movie={movie}
        route={props.route.pathname}
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
