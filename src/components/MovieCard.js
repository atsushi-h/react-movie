import React from 'react'
import AddMylistBtn from '../containers/button/AddMylistBtn'
import DeleteMylistBtn from '../containers/button/DeleteMylistBtn'
import DisableBtn from './button/DisableBtn'


const IMAGE_PATH = process.env.REACT_APP_IMAGE_PATH

const MovieCard = ({ movie, route, Mylist }) => {
  const posterPath = IMAGE_PATH + movie.poster_path
  const isRegistared = Mylist.movies.includes(movie)

  return (
    <>
      <h2>{movie.title}</h2>
      <img src={posterPath} alt={movie.title}></img>
      <p>{movie.overview}</p>
      {
        route === '/mylist' ? (
          <DeleteMylistBtn movie={movie}/>
        ) : isRegistared ? (
          <DisableBtn />
        ) : (
          <AddMylistBtn movie={movie}/>
        )
      }
    </>
  )
}

export default MovieCard
