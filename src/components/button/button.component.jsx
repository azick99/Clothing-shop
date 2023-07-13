import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
<<<<<<< HEAD:src/components/button/button.component.jsx
} from './button.styles';
=======
  ButtonSpinner,
} from './Button.style.jsx'
>>>>>>> 932ce2b502ca18d4a9be6b7010706d4bd3a5973d:src/components/button/Button.jsx

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

<<<<<<< HEAD:src/components/button/button.component.jsx
const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};
=======
const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType)
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner/> : children}
    </CustomButton>
  )
}
>>>>>>> 932ce2b502ca18d4a9be6b7010706d4bd3a5973d:src/components/button/Button.jsx

export default Button;
