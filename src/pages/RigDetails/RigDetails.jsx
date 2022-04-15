import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './RigDetails.css'

// Services
import { getOne, assocGuitar, assocPedal, assocAmp } from '../../services/rigs'

// Components
import RigActions from './components/RigActions'
import GuitarCollection from './components/GuitarCollection'
import AmpCollection from './components/AmpCollection'
import PedalCollection from './components/PedalCollection'

const RigDetails = ({ rigImages, user }) => {
  const { id } = useParams()
  const [rig, setRig] = useState(null)
  const [availableGuitars, setAvailableGuitars] = useState([])
  const [availableAmps, setAvailableAmps] = useState([])
  const [availablePedals, setAvailablePedals] = useState([])
  const idx = Math.floor(Math.random() * (rigImages.length))

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

  const addAmpToCollection = async (e) => {
    e.preventDefault()
    const ampId = parseInt(e.target.id)
    const updatedRig = await assocAmp(rig.id, ampId)
    setAvailableAmps(availableAmps.filter(amp => ampId !== amp.id))
    setRig({...updatedRig})
  }

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setRig(data.rig)
      setAvailableGuitars(data.available_guitars)
      setAvailableAmps(data.available_amps)
      setAvailablePedals(data.available_pedals)
    }
    fetchOne()
  }, [id])

  if (!rig) return <h1>Loading</h1>

  return (
    <>
      <section className="rig-container">
        <div className="rig-img">
          <img className="usr-img" src={rigImages[idx]} alt={`${rig.name}`} />
        </div>
        <div className="rig-details">
          <h1>{rig.name}</h1>
          <p>{rig.description}</p>
          <RigActions rig={rig} user={user} />
        </div>
      </section>       
      <div className="gear-container">
        <div className="">
          <GuitarCollection
            rig={rig}
            user={user}
            guitars={availableGuitars}
            addGuitarToCollection={addGuitarToCollection}
          /> 
        </div>
        <div className="amp-collection">
          <AmpCollection
            rig={rig}
            user={user}
            amps={availableAmps}
            addAmpToCollection={addAmpToCollection}
          /> 
        </div>
        <div className="pedal-collection">
          <PedalCollection
            rig={rig}
            user={user}
            pedals={availablePedals}
            addPedalToCollection={addPedalToCollection}
          /> 
        </div>
      </div>
    </>
  )
}

export default RigDetails