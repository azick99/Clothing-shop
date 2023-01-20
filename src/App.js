import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './routes/home/Home'
import Navitagtion from './routes/navigation/Navigation'
import Authentication from './routes/authentication/Authentication'
import Shop from './routes/shop/Shop'
import Checkout from './routes/checkout/Checkout'
import { useDispatch } from 'react-redux'
import { checkUserSession } from './store/user/user.action'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(checkUserSession())
  }, [])

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App
