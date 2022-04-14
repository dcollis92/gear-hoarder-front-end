import './PedalList.css'

// Image Assets

// Components
import PedalCard from '../../components/PedalCard/PedalCard'

const PedalList = ({pedals, pedalImages}) => {
  return (
    <>
      <section className="page-header">
        <h1>Pedals</h1>
      </section>
      <section className="pedal-card-container">
        {pedals.map((pedal) => (
          <PedalCard key={pedal.id} pedal={pedal} 
          pedalImages={pedalImages} />
        ))}
      </section>
    </>
  )
}

export default PedalList