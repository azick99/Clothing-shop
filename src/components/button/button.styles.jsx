<<<<<<< HEAD:src/components/button/button.styles.jsx
import styled from 'styled-components';
=======
import styled from 'styled-components'
import { SpinnerContainer } from '../spinner/spinner.style';
>>>>>>> 932ce2b502ca18d4a9be6b7010706d4bd3a5973d:src/components/button/Button.style.jsx

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items:center;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
<<<<<<< HEAD:src/components/button/button.styles.jsx
`;
=======
`


export const ButtonSpinner = styled(SpinnerContainer)`

  width: 30px;
  height: 30px;

`
>>>>>>> 932ce2b502ca18d4a9be6b7010706d4bd3a5973d:src/components/button/Button.style.jsx
