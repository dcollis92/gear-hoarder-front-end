import './GuitarList.css'

// Image Assets
import Explorer from '../../assets/guitar-explorer.png'
import LesPaul from '../../assets/guitar-lespaul.svg'
import Strat from '../../assets/guitar-strat.svg'

// Components
import GuitarCard from '../../components/GuitarCard/GuitarCard'

const GuitarList = (props) => {
  return (
    <>
      <section className="page-header">
        <h1>Guitar List</h1>
        <img src={Explorer} alt="a gibson explorer" />
        <img src={LesPaul} alt="a gibson les paul" />
        <img src={Strat} alt="a fender strat" />
      </section>
      <section className="guitar-card-container">
        {props.guitars.map((guitar) => (
          <GuitarCard key={guitar.id} guitar={guitar} isCard={true} />
        ))}
      </section>
    </>
  )
}

export default GuitarList
