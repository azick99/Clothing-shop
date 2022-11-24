import { createContext, useEffect, useState } from 'react'
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils'

//as actual value you want to access
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
})

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
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
