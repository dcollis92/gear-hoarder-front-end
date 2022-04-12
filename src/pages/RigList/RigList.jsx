import './RigList.css'

// Image Assets




// Components
import RigCard from '../../components/RigCard/RigCard'

const RigList = (props) => {
  return (
    <>
      <section
      className="page-header">
        <h1>Rigs</h1>
        {/* <img src={} alt=""
        <img src={} alt=""
        <img src={} alt="" */}
      </section>
      <section
      className="rig-card-container">
        {props.rigs.map((rig) => (
          <RigCard key={rig.id} rig={rig} isCard={true} />
        ))}
      </section>
    </>
  )
}

export default RigList