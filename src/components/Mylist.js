import React from 'react'
import MovieCard from '../containers/MovieCard'

const Mylist = props => {

  const mylist = props.Mylist.movies.map(movie => {
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
      {mylist}
    </>
  )
}

export default Mylist
