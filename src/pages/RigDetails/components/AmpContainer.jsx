import { Link } from 'react-router-dom'

const AmpContainer = ({ amp, addAmpToCollection }) => {
  return (
    <div key={amp.id} className="amp-container">
      <div className="color-block" style={{ backgroundColor: amp.color }}></div>
      <Link to={`/amps/${amp.id}`}>
        <p>{amp.make} {amp.model}</p>
      </Link>
      {addAmpToCollection &&
        <form id={amp.id} onSubmit={addAmpToCollection}>
          <button type="submit" className="btn submit">Add Amp</button>
        </form>
      }
    </div>
  )
}

export default AmpContainer