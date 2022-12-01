import { useContext } from 'react'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import { CartContext } from '../../context/curt.context'
import './Checkout.styles.scss'

const Checkout = () => {
  const { cartItems, totalItemPrice} =
    useContext(CartContext)
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <span className="total">Total: ${totalItemPrice}</span>
    </div>
  )
}

export default Checkout
