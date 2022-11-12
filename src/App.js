import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import './directory/directory.style.scss'
import Home from './routes/home/Home'
import Navitagtion from './routes/navigation/Navigation'
import SignIn from './routes/sign-in/SignIn'

const Shop = () => {
  return <h1>I am a shop page</h1>
}

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navitagtion />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="sign-in" element={<SignIn />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
