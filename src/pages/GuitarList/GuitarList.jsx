import './GuitarList.css'

// Image Assets
import GuitarExplorer from '../../assets/guitar-explorer.png'
import GibsonLesPaul from '../../assets/guitar-lespaul.png'
import GuitarStrat from '../../assets/guitar-strat.png'
import GuitarSG from '../../assets/guitar-sg.png'

// Components
import GuitarCard from '../../components/GuitarCard/GuitarCard'

const GuitarList = (props) => {
  return (
    <>
      <section className="page-header">
        <h1>Guitar List</h1>
        <img src={GuitarExplorer} alt="a gibson explorer" />
        <img src={GibsonLesPaul} alt="a gibson les paul" />
        <img src={GuitarStrat} alt="a fender strat" />
        <img src={GuitarSG} alt="a gibson sg" />
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
