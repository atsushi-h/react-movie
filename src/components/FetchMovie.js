import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import MovieCard from '../containers/MovieCard'
import Search from './Search'


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

const FetchMovie = ({ movies, route, fetchMovies }) => {
  const classes = useStyles()

  useEffect(() => {
    fetchMovies()
  }, [])

  const movieList = movies.movies.map(movie => {
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
      <Search search={fetchMovies}/>
      {
        movies.isLoading && !movies.error ? (
          <CircularProgress />
        ) : movies.error ? (
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

export default FetchMovie
