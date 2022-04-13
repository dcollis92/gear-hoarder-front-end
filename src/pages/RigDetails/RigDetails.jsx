import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './RigDetails.css'

// Services
import { getOne, assocGuitar, assocPedal } from '../../services/rigs'

// Components
import RigActions from './components/RigActions'
import GuitarCollection from './components/GuitarCollection'
import PedalCollection from './components/PedalCollection'

const RigDetails = ({ gearImages, user }) => {
  const { id } = useParams()
  const [rig, setRig] = useState(null)
  const [availableGuitars, setAvailableGuitars] = useState([])
  const [availablePedals, setAvailablePedals] = useState([])
  const idx = Math.floor(Math.random() * (gearImages.length))

  const addGuitarToCollection = async (e) => {
    e.preventDefault()
    const guitarId = parseInt(e.target.id)
    const updatedRig = await assocGuitar(rig.id, guitarId)
    setAvailableGuitars(availableGuitars.filter(guitar => guitarId !== guitar.id))
    setRig({...updatedRig})
  }

  const addPedalToCollection = async (e) => {
    e.preventDefault()
    const pedalId = parseInt(e.target.id)
    const updatedRig = await assocPedal(rig.id, pedalId)
    setAvailablePedals(availablePedals.filter(pedal => pedalId !== pedal.id))
    setRig({...updatedRig})
  }

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setRig(data.rig)
      setAvailableGuitars(data.available_guitars)
      setAvailablePedals(data.available_pedals)
    }
    fetchOne()
  }, [id])

  if (!rig) return <h1>Loading</h1>

  return (
    <>
      <section className="rig-container">
        <div className="rig-img">
          <img className="usr-img" src={gearImages[idx]} alt={`${rig.name}`} />
        </div>
        <div className="rig-details">
          <h1>{rig.name}</h1>
          <p>{rig.description}</p>
          <RigActions rig={rig} user={user} />
        </div>
      </section> 
      {/* - display rig -  */}
      <div className="guitar-container">
        <GuitarCollection
          rig={rig}
          user={user}
          guitars={availableGuitars}
          addGuitarToCollection={addGuitarToCollection}
        /> 
      </div>
      <div className="guitar-container">
        <PedalCollection
          rig={rig}
          user={user}
          pedals={availablePedals}
          addPedalToCollection={addPedalToCollection}
        /> 
      </div>
    </>
  )
}

export default RigDetails