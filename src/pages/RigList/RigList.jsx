import './RigList.css'
import RigCard from '../../components/RigCard/RigCard'

const RigList = ({rigs, rigImages}) => {
  return (
    <main>
      <section className="page-header">
        <h1>Rigs</h1>
      </section>
      <section className="card-container">
        {rigs.map((rig) => (
          <RigCard key={rig.id} rig={rig} 
          rigImages={rigImages} />
        ))}
      </section>
      
    </main>
  )
}

export default RigList