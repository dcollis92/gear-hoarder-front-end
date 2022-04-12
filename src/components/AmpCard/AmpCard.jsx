import { Link } from 'react-router-dom'
import { hexToRGBA } from './Utils'

const ampCard = ({ amp, isCard }) => {
  const cardStyle = {
    borderColor: `${amp.color}`,
    backgroundColor: amp.color && hexToRGBA(amp.color)
  }

  return (
    <Link to={`/amps/${amp.id}`} className="amp-card" style={cardStyle}>
      {isCard && <><h2>{amp.name}</h2><p>{amp.description}</p></>}
    </Link>
  )
}

export default ampCard