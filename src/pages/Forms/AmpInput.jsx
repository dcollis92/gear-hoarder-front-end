const AmpInput = ({ form, handleChange }) => {
  return (
    <>
      <label htmlFor="make">Make</label>
      <input
        value={form.make ? form.make : ''} onChange={handleChange} id="make"
        required make="make" type="text" placeholder="Make" autoComplete="off"
      />
      <label htmlFor="model">Model</label>
      <input
        value={form.model ? form.model : ''} onChange={handleChange} id="model"
        required model="model" type="text" placeholder="Model" autoComplete="off"
      />
      <label htmlFor="wattage">Wattage</label>
      <input
        value={form.wattage ? form.wattage : ''} onChange={handleChange} id="wattage"
        required wattage="wattage" type="text" placeholder="Wattage" autoComplete="off"
      />
      <label htmlFor="speaker-size">Speaker Size</label>
      <input
        value={form.speaker_size ? form.speaker_size : ''} onChange={handleChange} id="speaker-size"
        required speaker-size="speaker-size" type="text" placeholder="SpeakerSize" autoComplete="off"
      />
      <label htmlFor="speaker-amount">Speaker Amount</label>
      <input
        value={form.speaker_amount ? form.speaker_amount : ''} onChange={handleChange} id="speaker-amount"
        required speaker-amount="speaker-amount" type="text" placeholder="SpeakerAmount" autoComplete="off"
      />
      <label htmlFor="power-type">Power Type</label>
      <input
        value={form.power_type ? form.power_type : ''} onChange={handleChange} id="power-type"
        required power-type="power-type" type="text" placeholder="PowerType" autoComplete="off"
      />
      <label htmlFor="ohm-rating">Ohm Rating</label>
      <input
        value={form.ohm_rating ? form.ohm_rating : ''} onChange={handleChange} id="ohm-rating"
        required ohm-rating="ohm-rating" type="text" placeholder="OhmRating" autoComplete="off"
      />           
      <label htmlFor="color">Color</label>
      <input
        value={form.color ? form.color : '#ff0000'} onChange={handleChange} id="color"
        required name="color" type="color" placeholder="Color" autoComplete="off"
      />
      <label htmlFor="year">Year</label>
      <input
        value={form.year ? form.year : '1969'} onChange={handleChange} id="year"
        required name="year" type="year" placeholder="year" autoComplete="off"
      />
      <label htmlFor="description">Description</label>
      <input
        value={form.description ? form.description : ''} onChange={handleChange} id="description"
        required name="description" type="text" placeholder="Description" autoComplete="off"
      />
      <label htmlFor="is-working">Is Working</label>
      <input
        value={form.is_working ? form.is_working : ''} onChange={handleChange} id="is-working"
        required name="is-working" type="text" placeholder="IsWorking" autoComplete="off"
      />
      <label htmlFor="on-loan">On Loan</label>
      <input
        value={form.on_loan ? form.on_loan : ''} onChange={handleChange} id="on-loan"
        required name="on-loan" type="text" placeholder="OnLoan" autoComplete="off"
      />
    </>
  )
}

export default AmpInput

            // color: ampData.color,
        // year: ampData.year,
        // description: ampData.description,
        // is_working: ampData.is_working,
        // on_loan: ampData.on_loan,