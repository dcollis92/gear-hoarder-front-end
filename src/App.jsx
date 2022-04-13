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
import AmpForm from './pages/Forms/AmpForm'
import AmpList from './pages/AmpList/AmpList'
import AmpDetails from './pages/AmpDetails/AmpDetails'
import GuitarForm from './pages/Forms/GuitarForm'
import GuitarList from './pages/GuitarList/GuitarList'
import GuitarDetails from './pages/GuitarDetails/GuitarDetails'
import PedalForm from './pages/Forms/PedalForm'
import PedalList from './pages/PedalList/PedalList'
import PedalDetails from './pages/PedalDetails/PedalDetails'
import RigConfirmation from './pages/Confirmation/RigConfirmation'
import AmpConfirmation from './pages/Confirmation/AmpConfirmation'
import GuitarConfirmation from './pages/Confirmation/GuitarConfirmation'
import PedalConfirmation from './pages/Confirmation/PedalConfirmation'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// Services
import * as authService from './services/authService'
import * as rigService from './services/rigs'
import * as ampService from './services/amps'
import * as guitarService from './services/guitars'
import * as pedalService from './services/pedals'

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
  const [amps, setAmps] = useState([])
  const [guitars, setGuitars] = useState([])
  const [pedals, setPedals] = useState([])
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

  useEffect(() => {
    const fetchData = async () => {
      const data = await ampService.getAll()
      setAmps(data)
    }
    fetchData()
  }, [])
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await guitarService.getAll()
      setGuitars(data)
    }
    fetchData()
  }, [])
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await pedalService.getAll()
      setPedals(data)
    }
    fetchData()
  }, [])

  const addRig = async (rigData) => {
    const rig = await rigService.create(rigData)
    setRigs([...rigs, rig])
  }

  const addAmp = async (ampData) => {
    const amp = await ampService.create(ampData)
    setAmps([...amps, amp])
  }

  const addGuitar = async (guitarData) => {
    const guitar = await guitarService.create(guitarData)
    setGuitars([...guitars, guitar])
  }

  const addPedal = async (pedalData) => {
    const pedal = await pedalService.create(pedalData)
    setPedals([...pedals, pedal])
  }

  const updateRig = async (rigData) => {
    const updatedRig = await rigService.update(rigData)
    setRigs(rigs.map((rig) => (
      rig.id === updatedRig.id ? updatedRig : rig
    )))
  }

  const updateAmp = async (ampData) => {
    const updatedAmp = await ampService.update(ampData)
    setAmps(amps.map((amp) => (
      amp.id === updatedAmp.id ? updatedAmp : amp
    )))
  }

  const updateGuitar = async (guitarData) => {
    const updatedGuitar= await guitarService.update(guitarData)
    setGuitars(guitars.map((guitar) => (
      guitar.id === updatedGuitar.id ? updatedGuitar : guitar
    )))
  }

  const updatePedal = async (pedalData) => {
    const updatedPedal = await pedalService.update(pedalData)
    setPedals(pedals.map((pedal) => (
      pedal.id === updatedPedal.id ? updatedPedal : pedal
    )))
  }

  const deleteRig = async (id) => {
    await rigService.deleteOne(id)
    setRigs(rigs.filter(rig => rig.id !== parseInt(id)))
  }

  const deleteAmp = async (id) => {
    await ampService.deleteOne(id)
    setAmps(amps.filter(amp => amp.id !== parseInt(id)))
  }

  const deleteGuitar = async (id) => {
    await guitarService.deleteOne(id)
    setGuitars(guitars.filter(guitar => guitar.id !== parseInt(id)))
  }

  const deletePedal = async (id) => {
    await pedalService.deleteOne(id)
    setPedals(pedals.filter(pedal => pedal.id !== parseInt(id)))
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
        <Route path="/amps" element={
            <ProtectedRoute user={user}>
              <AmpList 
                amps={amps} 
                gearImages={gearImages} 
              />
            </ProtectedRoute>
          } />
        <Route path="/guitars" element={
            <ProtectedRoute user={user}>
              <GuitarList 
                guitars={guitars} 
                gearImages={gearImages} 
              />
            </ProtectedRoute>
          } /> 
        <Route path="/pedals" element={
            <ProtectedRoute user={user}>
              <PedalList 
                pedals={pedals} 
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
        <Route path="/amps/:id" element={
          <ProtectedRoute user={user}>
            <AmpDetails 
              gearImages={gearImages} 
              user={user} />
          </ProtectedRoute>
        } />
        <Route path="/guitars/:id" element={
          <ProtectedRoute user={user}>
            <GuitarDetails 
              gearImages={gearImages} 
              user={user} />
          </ProtectedRoute>
        } />
        <Route path="/pedals/:id" element={
          <ProtectedRoute user={user}>
            <PedalDetails 
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
        <Route path="/amps/new" element={
          <ProtectedRoute user={user}>
            <AmpForm 
            addAmp={addAmp} 
            user={user} />
          </ProtectedRoute>
        } />
        <Route path="/guitars/new" element={
          <ProtectedRoute user={user}>
            <GuitarForm 
            addGuitar={addGuitar} 
            user={user} />
          </ProtectedRoute>
        } />
        <Route path="/pedals/new" element={
          <ProtectedRoute user={user}>
            <PedalForm 
            addPedal={addPedal} 
            user={user} />
          </ProtectedRoute>
        } />
        <Route path="/rigs/:id/edit" element={
          <ProtectedRoute user={user}>
            <RigForm rigs={rigs} updateRig={updateRig} user={user} />
          </ProtectedRoute>
        } />
        <Route path="/amps/:id/edit" element={
          <ProtectedRoute user={user}>
            <AmpForm amps={amps} updateAmp={updateAmp} user={user} />
          </ProtectedRoute>
        } />
        <Route path="/guitars/:id/edit" element={
          <ProtectedRoute user={user}>
            <GuitarForm guitars={guitars} updateGuitar={updateGuitar} user={user} />
          </ProtectedRoute>
        } />
        <Route path="/pedals/:id/edit" element={
          <ProtectedRoute user={user}>
            <PedalForm pedals={pedals} updatePedal={updatePedal} user={user} />
          </ProtectedRoute>
        } />
        <Route path="/rigs/:id/confirmation" element={
          <ProtectedRoute user={user}>
            <RigConfirmation deleteRig={deleteRig} user={user} />
          </ProtectedRoute>
        } />
        <Route path="/amps/:id/confirmation" element={
          <ProtectedRoute user={user}>
            <AmpConfirmation deleteAmp={deleteAmp} user={user} />
          </ProtectedRoute>
        } />
        <Route path="/guitars/:id/confirmation" element={
          <ProtectedRoute user={user}>
            <GuitarConfirmation deleteGuitar={deleteGuitar} user={user} />
          </ProtectedRoute>
        } />
        <Route path="/pedals/:id/confirmation" element={
          <ProtectedRoute user={user}>
            <PedalConfirmation deletePedal={deletePedal} user={user} />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  )
}

export default App
