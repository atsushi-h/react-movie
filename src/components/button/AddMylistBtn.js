import React from 'react'

const AddMylistBtn = props => {

  return (
    <button onClick={() => props.addMylist(props.movie)}>ADD MYLIST</button>
  )
}

export default AddMylistBtn
