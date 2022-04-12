import { useNavigate } from 'react-router-dom'

const PedalActions = ({ pedal, user }) => {
  const navigate = useNavigate()
  return (
    pedal.profile_id === user.id &&
    <div className="actions">
      <button className="btn warn" onClick={() => navigate(`/pedals/${pedal.id}/edit`, { state: pedal })}>Edit</button>
      <button className="btn danger" onClick={() => navigate(`/pedals/${pedal.id}/confirmation`, { state: pedal })}>Delete</button>
    </div>
  )
}

export default PedalActions
