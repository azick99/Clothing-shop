import { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import CartDropdown from '../../components/cart-dropdown/CartDropdown'
import CartIcon from '../../components/cart-icon/CartIcon'
import { CartContext } from '../../context/curt.context'
import { UserContext } from '../../context/user.context'
import { singOutUser } from '../../utils/firebase/firebase.utils'
import {
  LogoContanier,
  NavigationContainer,
  NavLink,
  NavLinksContainer,
} from './navigation.styles'

const Navitagtion = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContanier to="/">
          <CrownLogo className="logo" />
        </LogoContanier>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={singOutUser}>SING OUT</NavLink>
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
