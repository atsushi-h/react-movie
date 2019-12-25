import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY
const API_URL = process.env.REACT_APP_API_URL
const API_URL_POPULAR_MOVIE = API_URL + 'popular'

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
export const fetchMovies = () => {
  return async (dispatch) => {
    dispatch(startRequest())
    try {
      const response = await axios.get(
        API_URL_POPULAR_MOVIE, { params: { api_key: API_KEY } }
      )
      dispatch(receiveData(response.data.results))
    } catch(error) {
      dispatch(receiveData(error, true))
    }
    dispatch(finishRequest())
  }
}
