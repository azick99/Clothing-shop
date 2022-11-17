import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB5m_voA09uX7ndlxqYucibAXDxRhz3Jc8',
  authDomain: 'cloth-shopping-a7205.firebaseapp.com',
  projectId: 'cloth-shopping-a7205',
  storageBucket: 'cloth-shopping-a7205.appspot.com',
  messagingSenderId: '243195085163',
  appId: '1:243195085163:web:fb9beffa98bdaaf50bcc2e',
}

// Initialize Firebase
const farebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider)

//FireStore
export const db = getFirestore()

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  //if user data exists
  //create / set the document with the data from userAuth in collection

  //user data does not exist

  //return userDocRef
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInformation,
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
    return userDocRef
  }
}

export const createAuthUserWithEmailAndPassword = async (email, passsword) => {
  if (!email || !passsword) return
  return await createUserWithEmailAndPassword(auth, email, passsword)
}