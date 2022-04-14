import './guitarList.css'

// Image Assets

// Components
import GuitarCard from '../../components/GuitarCard/GuitarCard'

const guitarList = ({guitars, guitarImages}) => {
  return (
    <>
      <section className="page-header">
        <h1>Guitars</h1>
      </section>
      <section className="guitar-card-container">
        {guitars.map((guitar) => (
          <GuitarCard key={guitar.id} guitar={guitar} 
          guitarImages={guitarImages} />
        ))}
      </section>
    </>
  )
}

export default guitarList