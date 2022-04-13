import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <ul>
            <li>Welcome, {user.name}</li>
            <li><Link to='/rigs'>All Rigss</Link></li>
            <li><Link to='/guitars'>All Guitars</Link></li>
            <li><Link to='/pedals'>All Pedals</Link></li>
            <li><Link to='/amps'>All Amps</Link></li>
            <li><Link to='/rigs/new'>Add a Rig</Link></li>
            <li><Link to='/guitars/new'>Add a Guitar</Link></li>
            <li><Link to='/pedals/new'>Add a Pedal</Link></li>
            <li><Link to='/amps/new'>Add an Amp</Link></li>
            <li><Link to="/profiles">Profiles</Link></li>
            <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
