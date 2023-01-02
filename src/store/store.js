import { applyMiddleware, compose, createStore } from 'redux'
// import logger from 'redux-logger'
import { rootReducer } from './root-reducer'

//  reusable Functions
// const currFnc = (a) => (b, c) => {
//     a + b - c
// }

// // const with3 = currFnc(3)
// // const with10 = currFnc(10)
// // with3(2, 4);

const loggerMiddleWare = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action)
  }
  console.log('type', action.type)
  console.log('payload', action.payload)
  console.log('currentState', store.getState())

    next(action)
    
    console.log('next state:', store.getState())

}
const middleWares = [loggerMiddleWare]

const composedEhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(rootReducer, undefined, composedEhancers)
