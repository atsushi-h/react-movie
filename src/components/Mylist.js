import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import MovieCard from '../containers/MovieCard'


const useStyles = makeStyles(theme => ({
  container: {
    justifyContent: "space-around",
    [theme.breakpoints.down('sm')]: {
      width: "90%",
      margin: "0 auto"
    }
  },
  item: {
    flexBasis: "auto"
  }
}))

const Mylist = ({ Mylist, route }) => {
  const classes = useStyles()

  const mylist = Mylist.movies.map(movie => {
    return (
      <Grid item lg={6} className={classes.item}>
        <MovieCard
          key={movie.id}
          movie={movie}
          route={route.pathname}
        />
      </Grid>
    )
  })

  return (
    <>
      {
        Mylist.movies.length ? (
          <Grid container className={classes.container}>
            {mylist}
          </Grid>
        ) : (
          <span>There is no Mylist</span>
        )
      }
    </>
  )
}

export default Mylist
