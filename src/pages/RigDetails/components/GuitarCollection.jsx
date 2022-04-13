// Image Assets
// import GuitarExplorer from '../../assets/guitar-explorer.png'
// import GuitarLesPaul from '../../assets/guitar-lespaul.png'
// import GuitarSG from '../../assets/guitar-sg.png'

// Components
import GuitarContainer from './GuitarContainer'

const GuitarCollection = ({ rig, guitars, user, addGuitarToCollection }) => {
  return (
    <section className="guitars">
      <div className="subsection-title">
        <h2>Guitars</h2>
        {/* <img src={GuitarExplorer} alt="" />
        <img src={GuitarLesPaul} alt="" />
        <img src={GuitarSG} alt="" /> */}
      </div>
      <h3>{rig.name}'s Guitars</h3>
      <div className="subsection-content">
        {rig.guitars.length
          ? rig.guitars.map((guitar) => <GuitarContainer key={guitar.id} guitar={guitar} />)
          : <p className="no-guitars">{rig.name} doesn't have any guitars 😞</p>
        }
      </div>
      {user.id === rig.profile_id &&
        <>
          <h3>Available guitars</h3>
          <div className="subsection-content">
            {guitars.length
              ? guitars.map((guitar) => <GuitarContainer key={guitar.id} guitar={guitar} rig={rig} user={user} addGuitarToCollection={addGuitarToCollection} />)
              : <p className="all-guitars"> {rig.name} already has all the available guitars 🥳</p>
            }
          </div>
        </>
      }
    </section>
  )
}

export default GuitarCollection


