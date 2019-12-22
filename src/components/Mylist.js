import React from 'react'
import MovieCard from '../containers/MovieCard'

const Mylist = ({ Mylist, route }) => {

  const mylist = Mylist.movies.map(movie => {
    return (
      <MovieCard
        key={movie.id}
        movie={movie}
        route={route.pathname}
      />
    )
  })

  return (
    <>
      {
        Mylist.movies.length ? (
          mylist
        ) : (
          <span>There is no Mylist</span>
        )
      }
    </>
  )
}

export default Mylist
