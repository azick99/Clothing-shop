import { useContext } from 'react'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import { CartContext } from '../../context/curt.context'
import {
  CheckoutBlock,
  CheckoutContainer,
  CheckoutHeader,
  Total,
} from './Checkout.styles'

const Checkout = () => {
  const { cartItems, totalItemPrice } = useContext(CartContext)
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <CheckoutBlock>
          <span>Product</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>Description</span>
        </CheckoutBlock>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <CheckoutBlock>
          <span>Price</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>Remove</span>
        </CheckoutBlock>
      </CheckoutHeader>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <Total>Total: ${totalItemPrice}</Total>
    </CheckoutContainer>
  )
}

export default Checkout
