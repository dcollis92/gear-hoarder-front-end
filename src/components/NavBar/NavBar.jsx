import { NavLink } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      <ul>
      {user ?
        <>
          <li>Welcome, {user.name}</li>
          <li><NavLink to='/rigs'>All Rigs</NavLink></li>
          <li><NavLink to='/guitars'>All Guitars</NavLink></li>
          <li><NavLink to='/pedals'>All Pedals</NavLink></li>
          <li><NavLink to='/amps'>All Amps</NavLink></li>
          <li><NavLink to='/rigs/new'>Add a Rig</NavLink></li>
          <li><NavLink to='/guitars/new'>Add a Guitar</NavLink></li>
          <li><NavLink to='/pedals/new'>Add a Pedal</NavLink></li>
          <li><NavLink to='/amps/new'>Add an Amp</NavLink></li>
          <li><NavLink to="/profiles">Profiles</NavLink></li>
          <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
        </>
      :
        <>
          <li><NavLink to="/login">Log In</NavLink></li>
          <li><NavLink to="/signup">Sign Up</NavLink></li>
        </>
      }
      </ul>
    </nav>
  )
}

export default NavBar
