import React from 'react'
import Button from '@material-ui/core/Button'

const AddMylistBtn = props => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => props.addMylist(props.movie)}
    >
      ADD MYLIST
    </Button>
  )
}

export default AddMylistBtn
