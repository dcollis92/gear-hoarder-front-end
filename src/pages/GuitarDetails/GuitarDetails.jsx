import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './GuitarDetails.css'

// Services
import { getOne } from '../../services/guitars'

// Components
import GuitarActions from './components/GuitarActions'
import GuitarCard from '../../components/GuitarCard/GuitarCard'

const GuitarDetails = ({ user, guitarImages }) => {
  const navigate = useNavigate()
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
          <p>Model Year: {guitar.year}</p>
          <p>Finish: {guitar.color}</p>
          {guitar.on_loan === false 
          ? <p>On Loan: No</p>
          : <p>On Loan: Yes</p>
          }
          {guitar.is_working === true 
          ? <p>Working: Yes</p>
          : <p>Working: No</p>
          }
          <p>Description: {guitar.description}</p>
          
          {user 
          ? <GuitarActions guitar={guitar} user={user} />
          : <></>
          }
          <button className="btn danger" onClick={() => navigate(`/guitars`)}>Return</button>
        </div>
      </section>
    </>
  )
}

export default GuitarDetails
