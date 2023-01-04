import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import CartDropdown from '../../components/cart-dropdown/CartDropdown'
import CartIcon from '../../components/cart-icon/CartIcon'
import { selectCurrentUser } from '../../store/user/user.selector'
import { singOutUser } from '../../utils/firebase/firebase.utils'
import { selectIsCartOpen } from '../../store/curt/curt.selector.js'
import {
  LogoContanier,
  NavigationContainer,
  NavLink,
  NavLinksContainer,
} from './navigation.styles'

const Navitagtion = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContanier to="/">
          <CrownLogo />
        </LogoContanier>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={singOutUser}>
              SING OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navitagtion
