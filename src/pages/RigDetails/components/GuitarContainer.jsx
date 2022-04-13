import { Link } from 'react-router-dom'

const GuitarContainer = ({ guitar, addGuitarToCollection }) => {
  return (
    <div key={guitar.id} className="guitar-container">
      <div className="color-block" 
          style={{ backgroundColor: guitar.color }}>
          </div>
      <Link to={`/guitars/${guitar.id}`}>
        <p>{guitar.name}</p>
      </Link>
      {addGuitarToCollection &&
        <form id={guitar.id} onSubmit={addGuitarToCollection}>
          <button type="submit" className="btn submit">Add Guitar</button>
        </form>
      }
    </div>
  )
}

export default GuitarContainer