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
import Confirmation from './pages/Confirmation/Confirmation'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// Services
import * as authService from './services/authService'
import * as rigService from './services/rigs'

const App = () => {
  const navigate = useNavigate()
  const [rigs, setRigs] = useState([])
  const [user, setUser] = useState(authService.getUser())
  console.log(user)

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
                // rigImages={catImages} 
              />
            </ProtectedRoute>
          } />
        <Route path="/rigs/:id" element={
          <ProtectedRoute user={user}>
            <RigDetails 
              // catImages={catImages} 
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
            <Confirmation deleteRig={deleteRig} user={user} />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  )
}

export default App
