import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './AmpDetails.css'

// Services
import { getOne } from '../../services/amps'

// Components
import AmpActions from './components/AmpActions'
import AmpCard from '../../components/AmpCard/AmpCard'

const AmpDetails = ({ user, ampImages }) => {
  const { id } = useParams()
  const [amp, setAmp] = useState(null)

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setAmp(data.amp)
    }
    fetchOne()
  }, [id])

  return (
    amp &&
    <>
      <section className="amp-details-container">
        <div className="amp-img">
          <AmpCard amp={amp} ampImages={ampImages} />
        </div>
        <div className="amp-details">
          <h1>{amp.make} {amp.model}</h1>
          {amp.type !== "Cabinet"
          ? <p>Power: {amp.power_type}</p>
          : <p></p>
          }
          <p>Model Year: {amp.year}</p>
          <p>Color: {amp.color}</p>
          {(amp.type !== "Head" && amp.type !== "Pre-Amp" && amp.type !== "Power")
          ? <p>{amp.speaker_amount} x {amp.speaker_size} {amp.type}</p>
          : <p></p>
          }
          {amp.type === "Pre-Amp"
          ? <p></p>
          :
          <>
          <p>Ohms: {amp.ohm_rating}</p>
          <p>Wattage: {amp.wattage}w</p>
          </>
          }
          {amp.on_loan === false 
          ? <p></p>
          : <p>This amp is currently on loan</p>
          }
          {amp.is_working === true 
          ? <p></p>
          : <p>This amp is currently BUSTED</p>
          }
          <p>{amp.description}</p>
          <AmpActions amp={amp} user={user} />
        </div>
      </section>
    </>
  )
}

export default AmpDetails