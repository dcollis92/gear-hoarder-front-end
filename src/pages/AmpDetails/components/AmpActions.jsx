import { useNavigate } from 'react-router-dom'

const AmpActions = ({ amp, user }) => {
  const navigate = useNavigate()
  return (
    amp.profile_id === user.id
    ?
    <div className="actions">
      <button className="btn warn" onClick={() => navigate(`/amps/${amp.id}/edit`, { state: amp })}>Edit</button>
      <button className="btn danger" onClick={() => navigate(`/amps/${amp.id}/confirmation`, { state: amp })}>Delete</button>
      <button className="btn danger" onClick={() => navigate(`/amps`)}>Return</button>
    </div>
    :
    <div className="actions">
      <button className="btn danger" onClick={() => navigate(`/amps`)}>Return</button>
    </div>
  )
}

export default AmpActions