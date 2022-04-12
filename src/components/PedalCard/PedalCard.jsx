import { Link } from 'react-router-dom'
import { hexToRGBA } from './Utils'

const pedalCard = ({ pedal, isCard }) => {
  const cardStyle = {
    borderColor: `${pedal.color}`,
    backgroundColor: pedal.color && hexToRGBA(pedal.color)
  }

  return (
    <Link to={`/pedals/${pedal.id}`} className="pedal-card" style={cardStyle}>
      {isCard && <><h2>{pedal.name}</h2><p>{pedal.description}</p></>}
    </Link>
  )
}

export default pedalCard