import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './PedalDetails.css'

// Services
import { getOne } from '../../services/pedals'

// Components
import PedalActions from './components/PedalActions'
import PedalCard from '../../components/PedalCard/PedalCard'

const PedalDetails = ({ user, pedalImages }) => {
  const { id } = useParams()
  const [pedal, setPedal] = useState(null)

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setPedal(data.pedal)
    }
    fetchOne()
  }, [id])

  return (
    pedal &&
    <>
      <section className="pedal-details-container">
        <div className="pedal-img">
          <PedalCard pedal={pedal} pedalImages={pedalImages} />
        </div>
        <div className="pedal-details">
        <h1>{pedal.make} {pedal.model}</h1>
          <p>Model Year: {pedal.year}</p>
          <p>Finish: {pedal.color}</p>
          {pedal.on_loan === false 
          ? <p>On Loan: No</p>
          : <p>On Loan: Yes</p>
          }
          {pedal.is_working === true 
          ? <p>Working: Yes</p>
          : <p>Working: No</p>
          }
          <p>Description: {pedal.description}</p>
          <PedalActions pedal={pedal} user={user} />
        </div>
      </section>
    </>
  )
}

export default PedalDetails
