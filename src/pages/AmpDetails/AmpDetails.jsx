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
          <h2>This {amp.year}</h2>
          <p>{amp.speaker_amount}</p>
          <p>{amp.speaker_size}</p>
          {amp.ohm_rating
          ? <p>Ohms: {amp.ohm_rating}</p>
          : <p>Ohms: Unknown</p>
          }
          <p>{amp.type}</p>
          <p>{amp.wattage}</p>
          <p>{amp.description}</p>
          <p>{amp.description}</p>
          <p>{amp.description}</p>
          <AmpActions amp={amp} user={user} />
        </div>
      </section>
    </>
  )
}

export default AmpDetails