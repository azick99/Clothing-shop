import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import './directory/directory.style.scss'
import Home from './routes/home/Home'
import Navitagtion from './routes/navigation/Navigation'
import Authentication from './routes/authentication/Authentication'
import { UserProvider } from './context/user.context'

const Shop = () => {
  return <h1>I am a shop page</h1>
}

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Navitagtion />}>
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="auth" element={<Authentication />} />
            </Route>
          </Routes>
        </div>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
