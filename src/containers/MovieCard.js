import { connect } from 'react-redux'
import MovieCard from '../components/MovieCard'

const mapStateToProps = state => ({
  Mylist: state.Mylist
})

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard)
