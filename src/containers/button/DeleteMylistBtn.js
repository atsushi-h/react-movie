import { connect } from 'react-redux'
import DeleteMylistBtn from '../../components/button/DeleteMylistBtn'
import * as actions from '../../actions/Mylist'

// mapStateToPropsがないとエラーになる
const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = dispatch => ({
  deleteMylist(movie) {
    dispatch(actions.deleteMovieToMylist(movie))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteMylistBtn)
