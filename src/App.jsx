import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'

// Components
import RigForm from './pages/Forms/RigForm'
import RigList from './pages/RigList/RigList'
import RigDetails from './pages/RigDetails/RigDetails'
import RigConfirmation from './pages/Confirmation/RigConfirmation'
import AmpConfirmation from './pages/Confirmation/AmpConfirmation'
import GuitarConfirmation from './pages/Confirmation/GuitarConfirmation'
import PedalConfirmation from './pages/Confirmation/PedalConfirmation'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// Services
import * as authService from './services/authService'
import * as rigService from './services/rigs'

// Image Assets
import AmpCombo from './assets/amp-combo.png'
import AmpCombo2 from './assets/amp-combo-2.png'
import AmpJcm from './assets/amp-jcmhead.png'
import JazzBass from './assets/bass-jbass-ur.png'
import JazzBass2 from './assets/bass-jbass.png'
import PacoBass from './assets/bass-paco.png'
import PrecisionBass from './assets/bass-pbass.png'
import GuitarExplorer from './assets/guitar-explorer.png'
import GuitarLesPaul from './assets/guitar-lespaul.png'
import GuitarSemiHollow from './assets/guitar-semihollow.png'
import GuitarSG from './assets/guitar-sg.png'
import GuitarStrat from './assets/guitar-strat.png'
import CoolPedal from './assets/pedal-1.png'
import MXRPedal from './assets/pedal-2.png'
import BossPedal from './assets/pedal-3.png'
import BigMuffPedal from './assets/pedal-4.png'


const App = () => {
  const navigate = useNavigate()
  const [rigs, setRigs] = useState([])
  const [user, setUser] = useState(authService.getUser())
  console.log(user)

  const gearImages = [
    AmpCombo, AmpCombo2, AmpJcm, JazzBass, JazzBass2, PacoBass, PrecisionBass, GuitarExplorer, GuitarLesPaul, GuitarSG, GuitarSemiHollow, GuitarStrat, CoolPedal, MXRPedal, BossPedal, BigMuffPedal,
  ]

  useEffect(() => {
    const fetchData = async () => {
      const data = await rigService.getAll()
      setRigs(data)
    }
    fetchData()
  }, [])

  const addRig = async (rigData) => {
    const rig = await rigService.create(rigData)
    setRigs([...rigs, rig])
  }

  const updateRig = async (rigData) => {
    const updatedRig = await rigService.update(rigData)
    setRigs(rigs.map((rig) => (
      rig.id === updatedRig.id ? updatedRig : rig
    )))
  }

  const deleteRig = async (id) => {
    await rigService.deleteOne(id)
    setRigs(rigs.filter(rig => rig.id !== parseInt(id)))
  }

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route path="/rigs" element={
            <ProtectedRoute user={user}>
              <RigList 
                rigs={rigs} 
                gearImages={gearImages} 
              />
            </ProtectedRoute>
          } />
        <Route path="/rigs/:id" element={
          <ProtectedRoute user={user}>
            <RigDetails 
              gearImages={gearImages} 
              user={user} />
          </ProtectedRoute>
        } />
        <Route path="/rigs/new" element={
          <ProtectedRoute user={user}>
            <RigForm 
            addRig={addRig} 
            user={user} />
          </ProtectedRoute>
        } />
        <Route path="/rigs/:id/edit" element={
          <ProtectedRoute user={user}>
            <RigForm rigs={rigs} updateRig={updateRig} user={user} />
          </ProtectedRoute>
        } />
        <Route path="/rigs/:id/confirmation" element={
          <ProtectedRoute user={user}>
            <RigConfirmation deleteRig={deleteRig} user={user} />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  )
}

export default App
