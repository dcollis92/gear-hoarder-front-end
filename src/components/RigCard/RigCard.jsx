import { Link } from 'react-router-dom'

const RigCard = ({ rig, rigImages }) => {

  const idx = Math.floor(Math.random() * (rigImages.length))

  return (
    <Link to={`/rigs/${rig.id}`} className="card">
      <div className="card-content">
        <div className="card-img-container">
          <img className="usr-img" src={rigImages[idx]} alt={`${rig.name}`} />
        </div>
        <h2 className="card-title">{rig.name}</h2>
        <p></p>
        <p><small>{rig.description}</small></p>
      </div>
    </Link>
  )
}

export default RigCard