import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectCartItems} from '../../store/cart/cart.selector'
import Button from '../button/button.component'
import CartItemComponent from '../cart-item/cart-item.component'

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles'
import { useCallback} from 'react'



const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)
  const navigate = useNavigate()
  const goToCheckoutHandler = useCallback(() => navigate('/checkout'), [])


  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartItemComponent key={item.id} cartItem={item} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown
