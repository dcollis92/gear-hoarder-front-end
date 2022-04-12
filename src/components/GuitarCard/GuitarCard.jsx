import { Link } from 'react-router-dom'
import { hexToRGBA } from './Utils'

const guitarCard = ({ guitar, isCard }) => {
  const cardStyle = {
    borderColor: `${guitar.color}`,
    backgroundColor: guitar.color && hexToRGBA(guitar.color)
  }

  return (
    <Link to={`/guitars/${guitar.id}`} className="guitar-card" style={cardStyle}>
      {isCard && <><h2>{guitar.name}</h2><p>{guitar.description}</p></>}
    </Link>
  )
}

export default guitarCard