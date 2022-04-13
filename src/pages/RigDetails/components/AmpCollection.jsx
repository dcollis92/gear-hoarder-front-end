// Image Assets
// import AmpCombo from '../../assets/amp-combo.png'
// import AmpCombo2 from '../../assets/amp-combo-2.png'
// import AmpJCM from '../../assets/amp-jcmhead.png'

// Components
import AmpContainer from './AmpContainer'

const AmpCollection = ({ rig, amps, user, addAmpToCollection }) => {
  return (
    <section className="amps">
      <div className="subsection-title">
        <h2>Amps</h2>
        {/* <img src={AmpCombo} alt="" />
        <img src={AmpCombo2} alt="" />
        <img src={AmpJCM} alt="" /> */}
      </div>
      <h3>{rig.name}'s Amps</h3>
      <div className="subsection-content">
        {rig.amps.length
          ? rig.amps.map((amp) => <AmpContainer key={amp.id} amp={amp} />)
          : <p className="no-amps">{rig.name} doesn't have any amps 😞</p>
        }
      </div>
      {user.id === rig.profile_id &&
        <>
          <h3>Available amps</h3>
          <div className="subsection-content">
            {amps.length
              ? amps.map((amp) => <AmpContainer key={amp.id} amp={amp} rig={rig} user={user} addAmpToCollection={addAmpToCollection} />)
              : <p className="all-amps"> {rig.name} already has all the available amps 🥳</p>
            }
          </div>
        </>
      }
    </section>
  )
}

export default AmpCollection