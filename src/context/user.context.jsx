import { createContext, useEffect, useReducer } from 'react'
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils'

//as actual value you want to access
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
})

// instead of using useState Hook we use useReduser

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_ CURRENT_USER',
}

const userReducer = (state, action) => {
  const { type, paylaod } = action

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: paylaod,
      }
    default:
      throw new Error(`Unhandled type ${type} in userReducer`)
  }
}

const INTIAL_STATE = {
  currentUser: null,
}

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null) ===> used useReducer
  const [{ currentUser }, dispatch] = useReducer(userReducer, INTIAL_STATE)

  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, paylaod: user })
  }
  const value = { currentUser, setCurrentUser }

  useEffect(() => {
    const unsubscirbe = onAuthStateChangedListener((user) => {
      setCurrentUser(user)
      if (user) {
        createUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
    })
    return unsubscirbe
  }, [])
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

/*
Reducer what is it?

const userReducer = (state,action) => {
return {
  current:null,{....}
}

}

*/
