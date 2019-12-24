import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import AddMylistBtn from '../containers/button/AddMylistBtn'
import DeleteMylistBtn from '../containers/button/DeleteMylistBtn'
import DisableBtn from './button/DisableBtn'

const IMAGE_PATH = process.env.REACT_APP_IMAGE_PATH

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('sm')] : {
      padding: "20px 0"
    }
  },
  container: {
    [theme.breakpoints.down('sm')] : {
      justifyContent: "center"
    }
  },
  media: {
    width: "200px",
    height: "300px"
  },
  title: {
    fontWeight: "bold"
  },
  actions: {
    justifyContent: "center"
  }
}))

const MovieCard = ({ movie, route, Mylist }) => {
  const classes = useStyles()
  const posterPath = IMAGE_PATH + movie.poster_path
  const isRegistared = Mylist.movies.includes(movie)

  return (
    <Card className={classes.card}>
      <Grid container className={classes.container}>
        <Grid item sm={4}>
          <CardMedia
            className={classes.media}
            image={posterPath}
            title={movie.title}
          />
        </Grid>
        <Grid item sm={8}>
          <CardContent>
            <Typography className={classes.title} variant="subtitle1" gutterBottom>
              {movie.title}
            </Typography>
            <Typography variant="p">
              {movie.overview}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            {
              route === '/mylist' ? (
                <DeleteMylistBtn movie={movie}/>
              ) : isRegistared ? (
                <DisableBtn />
              ) : (
                <AddMylistBtn movie={movie}/>
              )
            }
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  )
}

export default MovieCard
