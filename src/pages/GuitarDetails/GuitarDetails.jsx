import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './GuitarDetails.css'

// Services
import { getOne } from '../../services/guitars'

// Components
import GuitarActions from './components/GuitarActions'
import GuitarCard from '../../components/GuitarCard/GuitarCard'

const GuitarDetails = ({ user, guitarImages }) => {
  const { id } = useParams()
  const [guitar, setGuitar] = useState(null)

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setGuitar(data.guitar)
    }
    fetchOne()
  }, [id])

  return (
    guitar &&
    <>
      <section className="guitar-details-container">
        <div className="guitar-img">
          <GuitarCard guitar={guitar} guitarImages={guitarImages} />
        </div>
        <div className="guitar-details">
        <h1>{guitar.make} {guitar.model}</h1>
          <h2>Model Year: {guitar.year}</h2>
          <p>Finish: {guitar.color}</p>
          {guitar.on_loan === false 
          ? <p>This guitar is not on loan</p>
          : <p>This guitar is currently on loan</p>
          }
          {guitar.is_working === true 
          ? <p>This guitar is currently working</p>
          : <p>This guitar is currently BUSTED</p>
          }
          <p>{guitar.description}</p>
          <GuitarActions guitar={guitar} user={user} />
        </div>
      </section>
    </>
  )
}

export default GuitarDetails
