import './AmpList.css'

// Image Assets
import Combo from '../../assets/amp-combo.png'
import Combo2 from '../../assets/amp-combo-2.svg'
import JCM from '../../assets/amp-jcmhead.svg'

// Components
import AmpCard from '../../components/AmpCard/AmpCard'

const AmpList = (props) => {
  return (
    <>
      <section className="page-header">
        <h1>Amp List</h1>
        <img src={Combo} alt="a combo amp" />
        <img src={Combo2} alt="a combo amp" />
        <img src={JCM} alt="a jcm amp" />
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