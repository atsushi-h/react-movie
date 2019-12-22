import React, { useEffect } from 'react'
import MovieCard from '../containers/MovieCard'

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
      {
        props.popularMovies.isLoading && !props.popularMovies.error ? (
          <span>loading...</span>
        ) : props.popularMovies.error ? (
          <span>Error!!</span>
        ) : (
          movieList
        )
      }
    </>
  )
}

export default PopularMovie
