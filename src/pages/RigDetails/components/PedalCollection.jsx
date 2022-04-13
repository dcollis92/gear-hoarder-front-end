// Image Assets
// import MXRPedal from '../../assets/pedal-2.png'
// import BossPedal  from '../../assets/pedal-3.png'
// import BigMuffPedal from '../../assets/pedal-4.png'

// Components
import PedalContainer from './PedalContainer'

const PedalCollection = ({ rig, pedals, user, addPedalToCollection }) => {
  return (
    <section className="pedals">
      <div className="subsection-title">
        <h2>Pedals</h2>
        {/* <img src={MXRPedal} alt="" />
        <img src={BossPedal} alt="" />
        <img src={BigMuffPedal} alt="" /> */}
      </div>
      <h3>{rig.name}'s Pedals</h3>
      <div className="subsection-content">
        {rig.pedals.length
          ? rig.pedals.map((pedal) => <PedalContainer key={pedal.id} pedal={pedal} />)
          : <p className="no-pedals">{rig.name} doesn't have any pedals 😞</p>
        }
      </div>
      {user.id === rig.profile_id &&
        <>
          <h3>Available pedals</h3>
          <div className="subsection-content">
            {pedals.length
              ? pedals.map((pedal) => <PedalContainer key={pedal.id} pedal={pedal} rig={rig} user={user} addPedalToCollection={addPedalToCollection} />)
              : <p className="all-pedals"> {rig.name} already has all the available pedals 🥳</p>
            }
          </div>
        </>
      }
    </section>
  )
}

export default PedalCollection