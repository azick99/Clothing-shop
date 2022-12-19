import { createContext, useReducer } from 'react'
import { createAction } from '../utils/reducer/reducer.utils'

const clearItem = (cartItems, itemToRemove) =>
  cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id)

const decriseCounter = (cartItems, cartItemToRemove) => {
  //find the cart item to remove
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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartQnt: 0,
  totalItemPrice: 0,
})

const INTIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartQnt: 0,
  totalItemPrice: 0,
}

export const CART_ACTION_TYPE = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
}

const CartReducer = (state, action) => {
  const { type, payload } = action

  // const paylaod = {
  //   cartItems,
  //   cartQnt,
  //   totalItemPrice,
  // }

  switch (type) {
    case CART_ACTION_TYPE.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      }
    case CART_ACTION_TYPE.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      }

    default:
      throw new Error(`Unhandled type ${type} in CartReducer`)
  }
}

export const CartProvider = ({ children }) => {
  const [{ cartItems, isCartOpen, cartQnt, totalItemPrice }, dispatch] =
    useReducer(CartReducer, INTIAL_STATE)

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    )

    const newTotalItemPrice = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )

    dispatch(
      createAction(CART_ACTION_TYPE.SET_CART_ITEMS, {
        cartItems: newCartItems,
        totalItemPrice: newTotalItemPrice,
        cartQnt: newCartCount,
      })
    )
  }

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    updateCartItemsReducer(newCartItems)
  }

  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = decriseCounter(cartItems, cartItemToRemove)
    updateCartItemsReducer(newCartItems)
  }

  const clearItemFromCart = (itemToRemove) => {
    const newCartItems = clearItem(cartItems, itemToRemove)
    updateCartItemsReducer(newCartItems)
  }

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, bool))
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartQnt,
    removeItemFromCart,
    clearItemFromCart,
    totalItemPrice,
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
