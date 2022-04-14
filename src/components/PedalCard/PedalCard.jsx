import { Link } from 'react-router-dom'

const pedalCard = ({ pedal, pedalImages }) => {


  let idx = Math.floor(Math.random() * (pedalImages.length))


  return (
    <Link to={`/pedals/${pedal.id}`} className="card">
    <div className="card-content">
      <div className="card-img-container">
        <img className="usr-img" src={pedalImages[idx]} alt={`${pedal.model}`} />
      </div>
      <h2 className="card-title">{pedal.make} {pedal.model}</h2>
      <p></p>
      <p><small>{pedal.description}</small></p>
    </div>
  </Link>
  )
}

export default pedalCard