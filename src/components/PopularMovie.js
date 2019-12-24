import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
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

const PopularMovie = ({ popularMovies, route, onMount }) => {
  const classes = useStyles()

  useEffect(() => {
    onMount()
  }, [])

  const movieList = popularMovies.popularMovies.map(movie => {
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
        popularMovies.isLoading && !popularMovies.error ? (
          <CircularProgress />
        ) : popularMovies.error ? (
          <span>Error!!</span>
        ) : (
          <Grid container className={classes.container}>
            {movieList}
          </Grid>
        )
      }
    </>
  )
}

export default PopularMovie
