import React from 'react'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'

const DeleteMylistBtn = props => {
  return (
    <Button
      variant="contained"
      color="secondary"
      startIcon={<DeleteIcon />}
      onClick={() => props.deleteMylist(props.movie)}
    >
      DELETE
    </Button>
  )
}

export default DeleteMylistBtn
