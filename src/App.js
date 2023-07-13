<<<<<<< HEAD
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { checkUserSession } from './store/user/user.action';
=======
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
import { Elements } from '@stripe/react-stripe-js'
import { stripePromise } from './utils/stripe/stripe.utils'
>>>>>>> 932ce2b502ca18d4a9be6b7010706d4bd3a5973d

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession())
<<<<<<< HEAD
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};
=======
  }, [])

  return (
    <Elements stripe={stripePromise}>
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
    </Elements>
  )
}
>>>>>>> 932ce2b502ca18d4a9be6b7010706d4bd3a5973d

export default App;
