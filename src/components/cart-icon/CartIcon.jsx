import { useContext } from 'react'
import { CartContext } from '../../context/curt.context'
import './CartIcon.styles.jsx'
import { CartIconConatiner, ItemCount, ShopIcon } from './CartIcon.styles.jsx'

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartQnt } = useContext(CartContext)

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
  return (
    <CartIconConatiner onClick={toggleIsCartOpen}>
      <ShopIcon />
      <ItemCount>{cartQnt}</ItemCount>
    </CartIconConatiner>
  )
}

export default CartIcon
