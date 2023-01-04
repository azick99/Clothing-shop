import { useDispatch, useSelector } from 'react-redux'
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from '../../store/curt/curt.action'
import { selectCartItems } from '../../store/curt/curt.selector'
import {
  Arrow,
  CheckoutItemContanier,
  ImageContainer,
  Quantity,
  RemoveButton,
  TextPriceName,
  Value,
} from './CheckoutItem.styles'

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  const clearItemHanlder = () =>
    dispatch(clearItemFromCart(cartItems, cartItem))
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem))
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem))

  
  return (
    <CheckoutItemContanier>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <TextPriceName>{name}</TextPriceName>
      <Quantity className="quantity">
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <TextPriceName>{price}</TextPriceName>
      <RemoveButton onClick={clearItemHanlder}>&#10005;</RemoveButton>
    </CheckoutItemContanier>
  )
}

export default CheckoutItem
