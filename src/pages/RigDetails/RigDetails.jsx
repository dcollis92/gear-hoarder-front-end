import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './RigDetails.css'

// Services
import { getOne, assocToy } from '../../services/rigs'

// Components
import RigActions from './components/RigActions'
// import ToyCollection from './components/ToyCollection'

const RigDetails = ({ catImages, user }) => {
  const { id } = useParams()
  const [rig, setRig] = useState(null)
  // const [availableToys, setAvailableToys] = useState([])
  const idx = Math.floor(Math.random() * (catImages.length))

  const addToCollection = async (e) => {
    e.preventDefault()
    // const toyId = parseInt(e.target.id)
    // const updatedRig = await assocToy(rig.id, toyId)
    // setAvailableToys(availableToys.filter(toy => toyId !== toy.id))
    // setRig({...updatedRig})
  }

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setRig(data.rig)
      // setAvailableAmps(data.available_amps)
    }
    fetchOne()
  }, [id])

  if (!rig) return <h1>Loading</h1>

  return (
    <>
      <section className="rig-container">
        <div className="rig-img">
          <img className="usr-img" src={catImages[idx]} alt={`${rig.name}`} />
        </div>
        <div className="rig-details">
          <h1>{rig.name}</h1>
          {/* {rig.age > 0
            ? <h2>A {rig.age} year old {rig.breed}</h2>
            : <h2>A {rig.breed} kitten.</h2>
          } */}
          <p>{rig.description}</p>
          <RigActions rig={rig} user={user} />
        </div>
      </section>
      <div className="toy-container">
        {/* <ToyCollection
          rig={rig}
          user={user}
          toys={availableToys}
          addToCollection={addToCollection}
        /> */}
      </div>
    </>
  )
}

export default RigDetails