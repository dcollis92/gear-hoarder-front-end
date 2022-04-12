import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './RigDetails.css'

// Services
import { getOne, assocGuitar } from '../../services/rigs'

// Components
import RigActions from './components/RigActions'
// import GuitarCollection from './components/GuitarCollection'

const RigDetails = ({ gearImages, user }) => {
  const { id } = useParams()
  const [rig, setRig] = useState(null)
  const [availableGuitars, setAvailableGuitars] = useState([])
  const idx = Math.floor(Math.random() * (gearImages.length))

  const addToCollection = async (e) => {
    e.preventDefault()
    const guitarId = parseInt(e.target.id)
    const updatedRig = await assocGuitar(rig.id, guitarId)
    setAvailableGuitars(availableGuitars.filter(guitar => guitarId !== guitar.id))
    setRig({...updatedRig})
  }

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setRig(data.rig)
      // setAvailableAmps(data.available_amps)
      setAvailableGuitars(data.available_guitars)
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
          {/* 

              <h2> {rig.id} </h2>
              

          } */}
          <p>{rig.description}</p>
          <RigActions rig={rig} user={user} />
        </div>
      </section> 
      {/* - display rig -  */}
      {/* <div className="guitar-container">
        <GuitarCollection
          rig={rig}
          user={user}
          guitars={availableGuitars}
          addToCollection={addToCollection}
        /> 
      </div> */}
    </>
  )
}

export default RigDetails