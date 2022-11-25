import Button from '../button/Button'
import './CartDropdown.styles.scss'

const CartDropdown = ({dropdown}) => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <Button >CHECKOUT</Button>
      </div>
    </div>
  )
}

export default CartDropdown
