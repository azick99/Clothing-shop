import { useState } from 'react'
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button'
import FormInput from '../form-input/FormInput'

import { ButtonsContainer, SignUpFormContainer } from './SigninInput.styles'
import { useDispatch } from 'react-redux'
import { emailSignInStart, googleSignInStart } from '../../store/user/user.action'

  const defaultFormFields = {
    email: '',
    password: '',
  }

const SignInInput = () => {

  const dispatch = useDispatch()
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
    dispatch(googleSignInStart())
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      dispatch(emailSignInStart(email, password))
      resetFormFiels()
    } catch (error) {
    
          console.log('user sign in failed',error)
      }
      resetFormFiels()
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
