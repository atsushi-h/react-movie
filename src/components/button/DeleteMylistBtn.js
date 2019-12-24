import React from 'react'
import Button from '@material-ui/core/Button'

const DeleteMylistBtn = props => {
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => props.deleteMylist(props.movie)}
    >
      DELETE
    </Button>
  )
}

export default DeleteMylistBtn
