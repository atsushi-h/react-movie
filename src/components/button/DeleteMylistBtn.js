import React from 'react'

const DeleteMylistBtn = props => {

  return (
    <button onClick={() => props.deleteMylist(props.movie)}>DELETE MYLIST</button>
  )
}

export default DeleteMylistBtn
