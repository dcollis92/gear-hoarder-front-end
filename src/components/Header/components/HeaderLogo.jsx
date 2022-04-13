import { NavLink } from 'react-router-dom'
import Logo from '../../../assets/logo.png'

const HeaderLogo = () => {
  return (
    <div className="header-logo-container">
      <NavLink to='/'>
        <img
          src={Logo}
          alt="Gear Collector Logo"
        />
      </NavLink>
    </div>
  )
}

export default HeaderLogo