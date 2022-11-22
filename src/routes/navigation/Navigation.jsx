import { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { UserContext } from '../../context/user.context'
import { singOutUser } from '../../utils/firebase/firebase.utils'
import './navigation.styles.scss'

const Navitagtion = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const singOutHandler = async() => {
   await singOutUser();
    setCurrentUser(null)
  }
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={singOutHandler}>
              SING OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navitagtion
