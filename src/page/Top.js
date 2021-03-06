import React from 'react'
import FetchMovie from '../containers/FetchMovie'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
  container: {
    padding: "100px 0 40px 0"
  }
}))

const Top = () => {
  const classes = useStyles()

  return (
    <Container maxWidth="lg" className={classes.container}>
      <FetchMovie />
    </Container>
  )
}

export default Top
