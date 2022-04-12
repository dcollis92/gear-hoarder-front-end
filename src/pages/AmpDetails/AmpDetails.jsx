import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './AmpDetails.css'

// Services
import { getOne } from '../../services/amps'

// Components
import AmpActions from './components/AmpActions'
import AmpCard from '../../components/AmpCard/AmpCard'

const AmpDetails = ({ user }) => {
  const { id } = useParams()
  const [amp, setAmp] = useState(null)

  useEffect(() => {
    const fetchOne = async () => {
      const ampData = await getOne(id)
      setAmp(ampData)
    }
    fetchOne()
  }, [id])

  return (
    amp &&
    <>
      <section className="amp-details-container">
        <div className="amp-img">
          <AmpCard amp={amp} />
        </div>
        <div className="amp-details">
          <h1>{amp.name}</h1>
          <p>{amp.description}</p>
          <AmpActions amp={amp} user={user} />
        </div>
      </section>
    </>
  )
}

export default AmpDetails