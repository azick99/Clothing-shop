import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { rootReducer } from './root-reducer'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
}

// redux Thunk
// const thunkMiddleware = (store) => (next) => (action) => {
//   if (typeof (action) === 'function') {
//     action(dispatch)
//   }

// }

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSTION_COMPOSE__) ||
  compose

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWare = [
  process.env.NODE_ENV === 'development' && logger,
  thunk,
].filter(Boolean)
const composedEhancers = composeEnhancer(applyMiddleware(...middleWare))

export const store = createStore(persistedReducer, undefined, composedEhancers)

export const persistor = persistStore(store)
