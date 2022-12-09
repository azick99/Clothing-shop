import SignInInput from '../../components/sign-in-input/SignInInput'
import SignUpForm from '../../components/sign-up-form/SignUpForm'
import { AuthenticationContainer } from './Authentication.styles'
const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInInput />
      <SignUpForm />
    </AuthenticationContainer>
  )
}

export default Authentication
