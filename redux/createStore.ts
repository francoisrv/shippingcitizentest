import {
  createStore as createReduxStore,
  combineReducers,
  applyMiddleware,
  compose,
  Store,
} from 'redux'

import * as reducers from '~/redux/reducers'
import ReduxState from '~/redux/state'
import middlewares from '~/redux/middlewares'
import sagaMiddleware from '~/redux/sagas/middleware'
import sagas from '~/redux/sagas/sagas'
import { fetchBidsAction } from './actions'

export default function createStore() {
  const rootReducer = combineReducers(reducers)

  const store: Store<ReduxState, any> = createReduxStore(
    rootReducer,
    {},
    compose(applyMiddleware(...middlewares))
  )

  sagaMiddleware.run(sagas)

  store.dispatch(fetchBidsAction())

  return store
}
