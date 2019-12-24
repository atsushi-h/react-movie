import React from 'react'
import Mylist from '../containers/Mylist'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
  container: {
    padding: "100px 0 40px 0"
  }
}))

const Mylists = () => {
  const classes = useStyles()

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Mylist />
    </Container>
  )
}

export default Mylists
