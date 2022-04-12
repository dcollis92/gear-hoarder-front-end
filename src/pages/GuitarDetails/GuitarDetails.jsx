import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './GuitarDetails.css'

// Services
import { getOne } from '../../services/guitars'

// Components
import GuitarActions from './components/GuitarActions'
import GuitarCard from '../../components/GuitarCard/GuitarCard'

const GuitarDetails = ({ user }) => {
  const { id } = useParams()
  const [guitar, setGuitar] = useState(null)

  useEffect(() => {
    const fetchOne = async () => {
      const guitarData = await getOne(id)
      setGuitar(guitarData)
    }
    fetchOne()
  }, [id])

  return (
    guitar &&
    <>
      <section className="guitar-details-container">
        <div className="guitar-img">
          <GuitarCard guitar={guitar} />
        </div>
        <div className="guitar-details">
          <h1>{guitar.name}</h1>
          <p>{guitar.description}</p>
          <GuitarActions guitar={guitar} user={user} />
        </div>
      </section>
    </>
  )
}

export default GuitarDetails
