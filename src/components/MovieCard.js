import React from 'react'

const IMAGE_PATH = process.env.REACT_APP_IMAGE_PATH

const MovieCard = ({ title, poster_path, overview }) => {
  const posterPath = IMAGE_PATH + poster_path

  return (
    <>
      <h2>{title}</h2>
      <img src={posterPath} alt={title}></img>
      <p>{overview}</p>
    </>
  )
}

export default MovieCard
