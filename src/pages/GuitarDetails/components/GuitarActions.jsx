import { useNavigate } from 'react-router-dom'

const GuitarActions = ({ guitar, user }) => {
  const navigate = useNavigate()
  return (
    <div>
      <button className="btn danger" onClick={() => navigate(`/guitars`)}>Return</button>
      {user
      ?
      <>
      {guitar.profile_id === user.id
      ?
        <><button className="btn warn" onClick={() => navigate(`/guitars/${guitar.id}/edit`, { state: guitar })}>Edit</button>
        <button className="btn danger" onClick={() => navigate(`/guitars/${guitar.id}/confirmation`, { state: guitar })}>Delete</button> </>
      :
      <></>
      }
      </>
      : <></>
    }
    </div>
  )
}

export default GuitarActions