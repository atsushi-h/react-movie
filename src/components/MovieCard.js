import React from 'react'
import AddMylistBtn from '../containers/button/AddMylistBtn'

const IMAGE_PATH = process.env.REACT_APP_IMAGE_PATH

const MovieCard = ({ movie, route }) => {
  const posterPath = IMAGE_PATH + movie.poster_path
  // console.log(route)

  return (
    <>
      <h2>{movie.title}</h2>
      <img src={posterPath} alt={movie.title}></img>
      <p>{movie.overview}</p>
      {route === '/mylist'
      ? <p>delete btn</p>
      : <AddMylistBtn movie={movie}/>
      }
    </>
  )
}

export default MovieCard
