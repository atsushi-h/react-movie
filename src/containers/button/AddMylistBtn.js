import { connect } from 'react-redux'
import AddMylistBtn from '../../components/button/AddMylistBtn'
import * as actions from '../../actions/Mylist'

// mapStateToPropsがないとエラーになる
const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = dispatch => ({
  addMylist(movie) {
    dispatch(actions.addMovieToMylist(movie))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddMylistBtn)
