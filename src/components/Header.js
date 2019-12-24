import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import grey from '@material-ui/core/colors/grey'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    justifyContent: "center"
  },
  link: {
    marginRight: theme.spacing(3),
    textDecoration: "none"
  },
  menu: {
    color: grey[50],
    fontWeight: "bold"
  },
}))

const Header = props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.link}>
            <Typography className={classes.menu}>Home</Typography>
          </Link>
          <Link to="/mylist" className={classes.link}>
            <Typography className={classes.menu}>Mylist</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
