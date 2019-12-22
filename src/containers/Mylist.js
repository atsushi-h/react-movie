import { connect } from 'react-redux'
import Mylist from '../components/Mylist'
import * as actions from '../actions/Mylist'

const mapStateToProps = state => ({
  Mylist: state.Mylist,
  route: state.router.location
})

const mapDispatchToProps = dispatch => ({
  // deleteMylist() {
  //   dispatch(actions.deleteMovieToMylist)
  // }
})

export default connect(mapStateToProps, mapDispatchToProps)(Mylist)
