import './AmpList.css'
import AmpCard from '../../components/AmpCard/AmpCard'

const AmpList = ({amps, ampImages}) => {
  return (
    <div className='page'>
      <section className="page-header">
        <h1>Amps</h1>
      </section>
      <section className="amp-card-container">
        {amps.map((amp) => (
          <AmpCard key={amp.id} amp={amp} 
          ampImages={ampImages} />
        ))}
      </section>
    </div>
  )
}

export default AmpList