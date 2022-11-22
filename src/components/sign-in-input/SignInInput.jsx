import { useContext, useState } from 'react'
import Button from '../button/Button'
import FormInput from '../form-input/FormInput'
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils'
import './SigninInput.styles.scss'
import { UserContext } from '../../context/user.context'

const SignInInput = () => {
  const defaultFormFields = {
    email: '',
    password: '',
  }
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { setCurrentUser } = useContext(UserContext)
  const { email, password } = formFields
  const resetFormFiels = () => {
    setFormFields(defaultFormFields)
  }
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }
  const signWithGoogle = async () => {
    const { user } = await signInWithGooglePopup()
    await createUserDocumentFromAuth(user)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await signInAuthWithEmailAndPassword(email, password)
      setCurrentUser(response)
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email')
          break
        case 'auth/user-not-found':
          alert('no user assosiated with this email')
          break
        default:
          console.log(error)
      }
      resetFormFiels()
    }
  }

  return (
    <div className="sign-up-form-container">
      <form onSubmit={handleSubmit}>
        <h2>Alerdy Have an account?</h2>
        <span>Sign in with your password and email</span>
        <FormInput
          type="email"
          value={email}
          required
          onChange={handleChange}
          name="email"
          label="email"
        />
        <FormInput
          type="password"
          value={password}
          required
          onChange={handleChange}
          name="password"
          label="password"
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" type="button" onClick={signWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInInput