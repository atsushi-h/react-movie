import {
  // 名前が被ってしまうので別名でimportする
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { routerMiddleware, connectRouter } from 'connected-react-router'

import * as reducers from './reducers'


const createStore = history => {
  return reduxCreateStore(
    combineReducers({
      ...reducers,
      router: connectRouter(history)
    }),
    applyMiddleware(
      logger,
      thunk,
      routerMiddleware(history)
    )
  )
}

export default createStore
