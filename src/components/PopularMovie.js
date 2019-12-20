import React, { useEffect } from 'react'

const PopularMovie = props => {
  useEffect(() => {
    props.onMount()
  })

  return (
    <div>PopularMovie</div>
  )
}

export default PopularMovie
