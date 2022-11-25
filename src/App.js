import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import './directory/directory.style.scss'
import Home from './routes/home/Home'
import Navitagtion from './routes/navigation/Navigation'
import Authentication from './routes/authentication/Authentication'
import { UserProvider } from './context/user.context'
import Shop from './routes/shop/Shop'
import { ProductProvider } from './context/product.context'
import { CartProvider } from './context/curt.context'

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <div className="App">
              <Routes>
                <Route path="/" element={<Navitagtion />}>
                  <Route index element={<Home />} />
                  <Route path="shop" element={<Shop />} />
                  <Route path="auth" element={<Authentication />} />
                </Route>
              </Routes>
            </div>
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
