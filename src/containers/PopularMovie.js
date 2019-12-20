import { connect } from 'react-redux'
import PopularMovie from '../components/PopularMovie'
import * as actions from '../actions/PopularMovie'

const mapStateToProps = state => ({
  popularMovies: state.popularMovies
})

const mapDispatchToProps = dispatch => ({
  onMount() {
    dispatch(actions.fetchPopularMovie())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PopularMovie)
