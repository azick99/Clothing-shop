import { createContext, useState } from 'react'
import PRODUCTS from '../shop-data/shop-data.json'

//as actual value you want to access
export const ProductsContext = createContext({
  products: [],
})

export const ProductProvider = ({ children }) => {
  const [products] = useState(PRODUCTS)
  const value = { products }

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}
