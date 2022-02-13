import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import authSagas from './saga'
import rootReducer from '../Redux/Reducer/Rootreducer'
import { persistStore } from 'redux-persist'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// redux sagas is a middleware that we apply to the store
export const configStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  )
  sagaMiddleware.run(authSagas)
  const persistor = persistStore(store)
  return { store }
}


// export default {store, persistor};