import SignInInput from '../../components/sign-in-input/SignInInput'
import SignUpForm from '../../components/sign-up-form/SignUpForm'
import './Authentication.styles.scss'
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInInput />
      <SignUpForm />
    </div>
  )
}

export default Authentication
