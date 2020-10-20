import React from 'react'
import { Provider } from 'react-redux'
import createStore from '~/redux/createStore'

export default (Component: React.ComponentType) => {
  const store = createStore()

  return () => (
    <Provider store={store}>
      <Component />
    </Provider>
  )
}
