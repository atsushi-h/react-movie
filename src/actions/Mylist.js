// Mylistに追加
export const addMovieToMylist = movie => ({
  type: 'ADD_MYLIST',
  payload: {
    movie
  }
})

// Mylistから削除
export const deleteMovieToMylist = movie => ({
  type: 'DELETE_MYLIST',
  payload: {
    movie
  }
})
