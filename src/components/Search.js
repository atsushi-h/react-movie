import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      width: "90%",
      marginRight: "auto",
      marginLeft: "auto"
    }
  },
  input: {
    marginRight: theme.spacing(3)
  }
}))

const Search = props => {
  const classes = useStyles()
  const [searchValue, setSearchValue] = useState('')

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value)
  }

  const resetInputField = () => {
    setSearchValue('')
  }

  const callSearchFunction = e => {
    e.preventDefault()
    props.search(searchValue)
    resetInputField()
  }

  return (
    <form className={classes.root}>
      <TextField
        className={classes.input}
        id="outlined-basic"
        label="Search movies..."
        variant="outlined"
        value={searchValue}
        onChange={handleSearchInputChanges}
      />
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<SearchIcon />}
        onClick={callSearchFunction}
      >
        Search
      </Button>
    </form>
  )
}

export default Search
