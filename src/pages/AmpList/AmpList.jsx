import './AmpList.css'

// Image Assets

// Components
import AmpCard from '../../components/AmpCard/AmpCard'

const AmpList = ({amps, ampImages}) => {
  return (
    <>
      <section className="page-header">
        <h1>Amps</h1>
      </section>
      <section className="amp-card-container">
        {amps.map((amp) => (
          <AmpCard key={amp.id} amp={amp} 
          ampImages={ampImages} />
        ))}
      </section>
    </>
  )
}

export default AmpList