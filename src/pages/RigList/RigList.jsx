import './RigList.css'

// Image Assets

// Components
import RigCard from '../../components/RigCard/RigCard'

const RigList = ({rigs, rigImages}) => {
  return (
    <>
      <section className="page-header">
        <h1>Rigs</h1>
      </section>
      <section className="card-container">
        {rigs.map((rig) => (
          <RigCard key={rig.id} rig={rig} 
          rigImages={rigImages} />
        ))}
      </section>
      
    </>
  )
}

export default RigList