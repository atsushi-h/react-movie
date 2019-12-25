import React from 'react'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'

const AddMylistBtn = props => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<SaveIcon />}
      onClick={() => props.addMylist(props.movie)}
    >
      ADD MYLIST
    </Button>
  )
}

export default AddMylistBtn
