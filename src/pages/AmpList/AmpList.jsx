import './AmpList.css'

// Image Assets
import AmpCombo from '../../assets/amp-combo.png'
import AmpCombo2 from '../../assets/amp-combo-2.png'
import AmpJCM from '../../assets/amp-jcmhead.png'

// Components
import AmpCard from '../../components/AmpCard/AmpCard'

const AmpList = (props) => {
  return (
    <>
      <section className="page-header">
        <h1>Amp List</h1>
        <img src={AmpCombo} alt="a combo amp" />
        <img src={AmpCombo2} alt="a combo amp" />
        <img src={AmpJCM} alt="a jcm amp" />
        <img src={AmpCombo} alt="a combo amp" />
      </section>
      <section className="amp-card-container">
        {props.amps.map((amp) => (
          <AmpCard key={amp.id} amp={amp} isCard={true} />
        ))}
      </section>
    </>
  )
}

export default AmpList