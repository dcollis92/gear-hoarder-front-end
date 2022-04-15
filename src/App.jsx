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
// Rigs
import Rig1 from './assets/rigs/rig1.jpeg'
import Rig2 from './assets/rigs/rig2.jpeg'
import Rig3 from './assets/rigs/rig3.jpeg'
import Rig4 from './assets/rigs/rig4.jpeg'
import Rig5 from './assets/rigs/rig5.jpeg'
import Rig6 from './assets/rigs/rig6.jpeg'
import Rig7 from './assets/rigs/rig7.jpeg'
import Rig8 from './assets/rigs/rig8.jpeg'
import Rig9 from './assets/rigs/rig9.jpeg'
import Rig10 from './assets/rigs/rig10.jpeg'
import Rig11 from './assets/rigs/rig11.jpeg'
import Rig12 from './assets/rigs/rig12.jpeg'

// Amps
import Amp1 from './assets/amps/amp1.jpeg'
import Amp2 from './assets/amps/amp2.jpeg'
import Amp3 from './assets/amps/amp3.jpeg'
import Amp4 from './assets/amps/amp4.jpeg'
import Amp5 from './assets/amps/amp5.jpeg'
import Amp6 from './assets/amps/amp6.jpeg'
import Amp7 from './assets/amps/amp7.jpeg'
import Amp8 from './assets/amps/amp8.jpeg'
import Amp9 from './assets/amps/amp9.jpeg'
import Amp10 from './assets/amps/amp10.jpeg'
import Amp11 from './assets/amps/amp11.jpeg'
import Amp12 from './assets/amps/amp12.jpeg'

// Guitars
import Guitar1 from './assets/guitars/guitar1.jpeg'
import Guitar2 from './assets/guitars/guitar2.jpeg'
import Guitar3 from './assets/guitars/guitar3.jpeg'
import Guitar4 from './assets/guitars/guitar4.jpeg'
import Guitar5 from './assets/guitars/guitar5.jpeg'
import Guitar6 from './assets/guitars/guitar6.jpeg'
import Guitar7 from './assets/guitars/guitar7.jpeg'
import Guitar8 from './assets/guitars/guitar8.jpeg'
import Guitar9 from './assets/guitars/guitar9.jpeg'
import Guitar10 from './assets/guitars/guitar10.jpeg'
import Guitar11 from './assets/guitars/guitar11.jpeg'
import Guitar12 from './assets/guitars/guitar12.jpeg'

// Pedals
import Pedal1 from './assets/pedals/pedal1.jpeg'
import Pedal2 from './assets/pedals/pedal2.jpeg'
import Pedal3 from './assets/pedals/pedal3.jpeg'
import Pedal4 from './assets/pedals/pedal4.jpeg'
import Pedal5 from './assets/pedals/pedal5.jpeg'
import Pedal6 from './assets/pedals/pedal6.jpeg'
import Pedal7 from './assets/pedals/pedal7.jpeg'
import Pedal8 from './assets/pedals/pedal8.jpeg'
import Pedal9 from './assets/pedals/pedal9.jpeg'
import Pedal10 from './assets/pedals/pedal10.jpeg'
import Pedal11 from './assets/pedals/pedal11.jpeg'
import Pedal12 from './assets/pedals/pedal12.jpeg'


const App = () => {
  const navigate = useNavigate()
  const [rigs, setRigs] = useState([])
  const [amps, setAmps] = useState([])
  const [guitars, setGuitars] = useState([])
  const [pedals, setPedals] = useState([])
  const [user, setUser] = useState(authService.getUser())


  const rigImages = [
    Rig1, Rig2, Rig3, Rig4, Rig5, Rig6, Rig7, Rig8, Rig9, Rig10, Rig11, Rig12
  ]

  const ampImages = [
    Amp1, Amp2, Amp3, Amp4, Amp5, Amp6, Amp7, Amp8, Amp9, Amp10, Amp11, Amp12
  ]

  const guitarImages = [
    Guitar1, Guitar2, Guitar3, Guitar4, Guitar5, Guitar6, Guitar7, Guitar8, Guitar9, Guitar10, Guitar11, Guitar12
  ]

  const pedalImages = [
    Pedal1, Pedal2, Pedal3, Pedal4, Pedal5, Pedal6, Pedal7, Pedal8, Pedal9, Pedal10, Pedal11, Pedal12
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
    const newId = rig.id
    navigate(`/rigs/${newId}`)
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
    const newId = updatedRig.id
    navigate(`/rigs/${newId}`)
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
        <Route path="/signup" element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route path="/login" element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route path="/profiles" element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route path="/rigs" element={
            <ProtectedRoute user={user}>
              <RigList rigs={rigs} 
              rigImages={rigImages} />
            </ProtectedRoute>
          } />
        <Route path="/amps" element={
            <ProtectedRoute user={user}>
              <AmpList amps={amps} 
              ampImages={ampImages} />
            </ProtectedRoute>
          } />
        <Route path="/guitars" element={
            <ProtectedRoute user={user}>
              <GuitarList guitars={guitars} 
              guitarImages={guitarImages} />
            </ProtectedRoute>
          } /> 
        <Route path="/pedals" element={
            <ProtectedRoute user={user}>
              <PedalList pedals={pedals} 
                pedalImages={pedalImages} />
            </ProtectedRoute>
          } />
        <Route path="/rigs/:id" element={
          <ProtectedRoute user={user}>
            <RigDetails rigImages={rigImages} 
              user={user} />
          </ProtectedRoute>
        } />
        <Route path="/amps/:id" element={
          <ProtectedRoute user={user}>
            <AmpDetails ampImages={ampImages} 
              user={user} />
          </ProtectedRoute>
        } />
        <Route path="/guitars/:id" element={
          <ProtectedRoute user={user}>
            <GuitarDetails guitarImages={guitarImages} 
              user={user} />
          </ProtectedRoute>
        } />
        <Route path="/pedals/:id" element={
          <ProtectedRoute user={user}>
            <PedalDetails pedalImages={pedalImages} 
              user={user} />
          </ProtectedRoute>
        } />
        <Route path="/rigs/new" element={
          <ProtectedRoute user={user}>
            <RigForm addRig={addRig} 
            user={user} />
          </ProtectedRoute>
        } />
        <Route path="/amps/new" element={
          <ProtectedRoute user={user}>
            <AmpForm addAmp={addAmp} 
            user={user} />
          </ProtectedRoute>
        } />
        <Route path="/guitars/new" element={
          <ProtectedRoute user={user}>
            <GuitarForm addGuitar={addGuitar} 
            user={user} />
          </ProtectedRoute>
        } />
        <Route path="/pedals/new" element={
          <ProtectedRoute user={user}>
            <PedalForm addPedal={addPedal} 
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
