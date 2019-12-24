import React, { useEffect } from 'react'
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

const PopularMovie = props => {
  const classes = useStyles()

  useEffect(() => {
    props.onMount()
  }, [])

  const movieList = props.popularMovies.popularMovies.map(movie => {
    return (
      <Grid item lg={6} className={classes.item}>
        <MovieCard
          key={movie.id}
          movie={movie}
          route={props.route.pathname}
        />
      </Grid>
    )
  })

  return (
    <>
      {
        props.popularMovies.isLoading && !props.popularMovies.error ? (
          <span>loading...</span>
        ) : props.popularMovies.error ? (
          <span>Error!!</span>
        ) : (
          <Grid container className={classes.container}>
            {
              movieList
            }
          </Grid>
        )
      }
    </>
  )
}

export default PopularMovie
