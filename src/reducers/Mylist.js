const initialState = {
  movies: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    // マイリストに追加
    case 'ADD_MYLIST':
      const newStateAdd = Object.assign({}, state)
      newStateAdd.movies.push(action.payload.movie)
      return newStateAdd

    // マイリストから削除
    case 'DELETE_MYLIST':
      const newStateDelete = Object.assign({}, state)
      const index = state.movies.indexOf(action.payload.movie)
      newStateDelete.movies.splice(index, 1)
      return newStateDelete
    
    default:
      return state
  }
}
