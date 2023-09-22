import { memo } from 'react'
import { CartItem } from '../../store/cart/cart.types'

import { CartItemContainer, ItemDetails } from './cart-item.styles'

export type ProductItem = CartItem & { name: string }

type CartItemProps = {
  cartItem: ProductItem
}

const CartItemComponent = memo(({ cartItem }: CartItemProps) => {
  const { name, imageUrl, price, quantity } = cartItem
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  )
})

export default CartItemComponent
