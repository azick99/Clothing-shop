import { useSelector } from 'react-redux'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import { selectCartItems, selectTotalItemPrice } from '../../store/curt/curt.selector'
import {
  CheckoutBlock,
  CheckoutContainer,
  CheckoutHeader,
  Total,
} from './Checkout.styles'

const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  const totalItemPrice = useSelector(selectTotalItemPrice)

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
