const initialState = {
  popularMovies: [],
  isLoading: false,
  error: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    // リクエスト開始時に状態をリセット
    // isLoadingをtrueに変更
    case 'START_REQUEST':
      return {
        ...state,
        isLoading: action.payload.isLoading
      }

    // データ受信
    case 'RECEIVE_DATA':
      return action.payload.error
        ? { ...state, error: true }
        : {
          ...state,
          popularMovies: action.payload.response
        }

    // リクエスト終了
    // isLoadingをfalseに変更
    case 'FINISH_REQUEST':
      return {
        ...state,
        isLoading: action.payload.isLoading
      }
    
    default:
      return state
  }
}
