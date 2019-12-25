import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY
const API_URL_BASE = process.env.REACT_APP_API_URL_BASE
const API_URL_POPULAR = API_URL_BASE + 'popular'
const API_URL_SEARCH = process.env.REACT_APP_API_URL_SEARCH

// リクエスト開始
const startRequest = () => ({
  type: 'START_REQUEST',
  payload: {
    isLoading: true
  }
})

// レスポンス受信
const receiveData = (response, error) => ({
  type: 'RECEIVE_DATA',
  payload: {
    response,
    error
  }
})

// リクエスト完了
const finishRequest = () => ({
  type: 'FINISH_REQUEST',
  payload: {
    isLoading: false,
  }
})

// 非同期通信
export const fetchMovies = input => {
  return async dispatch => {
    dispatch(startRequest())
    try {
      if(input) { // ユーザが検索した場合
        const response = await axios.get(
          API_URL_SEARCH, { params: {
            api_key: API_KEY,
            query: input
          }}
        )
        dispatch(receiveData(response.data.results))
      } else { // デフォルト表示用
        const response = await axios.get(
          API_URL_POPULAR, { params: { api_key: API_KEY } }
        )
        dispatch(receiveData(response.data.results))
      }
    } catch(error) {
      dispatch(receiveData(error, true))
    }
    dispatch(finishRequest())
  }
}
