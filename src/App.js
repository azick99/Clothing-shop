import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from './routes/home/Home'
import Navitagtion from './routes/navigation/Navigation'
import Authentication from './routes/authentication/Authentication'
import { UserProvider } from './context/user.context'
import Shop from './routes/shop/Shop'
import { CartProvider } from './context/curt.context'
import Checkout from './routes/checkout/Checkout'
import { CategoriesProvider } from './context/categories.context'

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <div className="App">
              <Routes>
                <Route path="/" element={<Navitagtion />}>
                  <Route index element={<Home />} />
                  <Route path="shop/*" element={<Shop />} />
                  <Route path="auth" element={<Authentication />} />
                  <Route path="checkout" element={<Checkout />} />
                </Route>
              </Routes>
            </div>
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
