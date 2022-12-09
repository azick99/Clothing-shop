import { useState } from 'react'
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button'
import FormInput from '../form-input/FormInput'
import {
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils'
import { ButtonsContainer, SignUpFormContainer } from './SigninInput.styles'

const SignInInput = () => {
  const defaultFormFields = {
    email: '',
    password: '',
  }
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields
  const resetFormFiels = () => {
    setFormFields(defaultFormFields)
  }
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }
  const signWithGoogle = async () => {
    await signInWithGooglePopup()
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await signInAuthWithEmailAndPassword(email, password)
      resetFormFiels()
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
    <SignUpFormContainer>
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
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signWithGoogle}
          >
            Google sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignUpFormContainer>
  )
}

export default SignInInput
