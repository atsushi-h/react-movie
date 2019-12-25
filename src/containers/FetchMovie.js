import { connect } from 'react-redux'
import FetchMovie from '../components/FetchMovie'
import * as actions from '../actions/FetchMovie'

const mapStateToProps = state => ({
  movies: state.FetchMovie,
  route: state.router.location
})

const mapDispatchToProps = dispatch => ({
  fetchMovies() {
    dispatch(actions.fetchMovies())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FetchMovie)
