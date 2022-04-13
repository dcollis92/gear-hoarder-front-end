import { NavLink } from 'react-router-dom'
import Logo from '../../../assets/logo.svg'

const HeaderLogo = () => {
  return (
    <div className="header-logo-container">
      <NavLink to='/'>
        GEAR HOARDERS
      </NavLink>
    </div>
  )
}

export default HeaderLogo