import createAction from '../../utils/reducer/reducer.utils'
import { CART_ACTION_TYPE } from './curt.types'

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItem contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  )
  if (cartItems === productToAdd) {
    cartItems++
  }
  // if found increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const decriseCounter = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  )
  // check if quantity is equal to 1, if it is remove the item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
  }

  //return back cartitems with matching  cart item with reduced quantity

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}

const clearItem = (cartItems, itemToRemove) =>
  cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id)

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, boolean)

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd)
  return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems)
}
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = decriseCounter(cartItems, cartItemToRemove)
  return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems)
}

export const clearItemFromCart = (cartItems, itemToRemove) => {
  const newCartItems = clearItem(cartItems, itemToRemove)
  return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems)
}
