import { Link } from 'react-router-dom'

const AmpCard = ({ amp, ampImages }) => {

  let idx = Math.floor(Math.random() * (ampImages.length))

  return (
    <Link to={`/amps/${amp.id}`} className="card">
    <div className="card-content">
      <div className="card-img-container">
        <img className="usr-img" src={ampImages[idx]} 
        alt={`${amp.make} ${amp.model}`} />
      </div>
      <h2 className="card-title">{amp.make} {amp.model}</h2>
    </div>
  </Link>
  )
}

export default AmpCard