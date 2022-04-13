import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './PedalDetails.css'

// Services
import { getOne } from '../../services/pedals'

// Components
import PedalActions from './components/PedalActions'
import PedalCard from '../../components/PedalCard/PedalCard'

const PedalDetails = ({ user }) => {
  const { id } = useParams()
  const [pedal, setPedal] = useState(null)

  useEffect(() => {
    const fetchOne = async () => {
      const pedalData = await getOne(id)
      setPedal(pedalData)
    }
    fetchOne()
  }, [id])

  return (
    pedal &&
    <>
      <section className="pedal-details-container">
        <div className="pedal-img">
          <PedalCard pedal={pedal} />
        </div>
        <div className="pedal-details">
          <h1>{pedal.name}</h1>
          <p>{pedal.description}</p>
          <PedalActions pedal={pedal} user={user} />
        </div>
      </section>
    </>
  )
}

export default PedalDetails
