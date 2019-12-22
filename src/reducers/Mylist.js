const initialState = {
  movies: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    // マイリストに追加
    case 'ADD_MYLIST':
      const movie = action.payload.movie
      const newState = Object.assign({}, state)
      newState.movies.push(movie)
      return newState

    // マイリストから削除
    // case 'DELETE_MYLIST':
    //   return {
    //     movies: []
    //   }
    
    default:
      return state
  }
}
