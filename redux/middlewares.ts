import { createLogger } from 'redux-logger'
import { compact } from 'lodash'
import sagaMiddleware from './sagas/middleware'

const middlewares = compact([
  // Redux logger middleware
  process.env.NODE_ENV === 'development' &&
    createLogger({
      collapsed: true,
      diff: true,
    }),

  // Redux saga
  sagaMiddleware,
])

export default middlewares
