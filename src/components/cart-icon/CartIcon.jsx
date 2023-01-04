import { useDispatch, useSelector } from 'react-redux'
import { setIsCartOpen } from '../../store/curt/curt.action'
import {
  selectCartCount,
  selectIsCartOpen,
} from '../../store/curt/curt.selector'

import './CartIcon.styles.jsx'
import { CartIconConatiner, ItemCount, ShopIcon } from './CartIcon.styles.jsx'

const CartIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen)
  const cartQnt = useSelector(selectCartCount)
  const dispatch = useDispatch()

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

  return (
    <CartIconConatiner onClick={toggleIsCartOpen}>
      <ShopIcon />
      <ItemCount>{cartQnt}</ItemCount>
    </CartIconConatiner>
  )
}

export default CartIcon
