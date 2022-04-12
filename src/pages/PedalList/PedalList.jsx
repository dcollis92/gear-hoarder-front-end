import './PedalList.css'

// Image Assets
import Pedal1 from '../../assets/pedal-1.png'
import Pedal2 from '../../assets/pedal-2.png'
import Pedal3  from '../../assets/pedal-3.png'

// Components
import PedalCard from '../../components/PedalCard/PedalCard'

const PedalList = (props) => {
  return (
    <>
      <section className="page-header">
        <h1>Pedal List</h1>
        <img src={Pedal1} alt="a fx pedal" />
        <img src={Pedal2} alt="a fx pedal" />
        <img src={Pedal3} alt="a fx pedal" />
      </section>
      <section className="pedal-card-container">
        {props.pedals.map((pedal) => (
          <PedalCard key={pedal.id} pedal={pedal} isCard={true} />
        ))}
      </section>
    </>
  )
}

export default PedalList
