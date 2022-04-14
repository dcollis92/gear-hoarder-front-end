const AmpInput = ({ form, handleChange }) => {
  return (
    <>
      <label htmlFor="type">Type</label>
      <select value={form.type} onChange={handleChange} id="type" required name="type">
        <option selected value="Combo">Combo</option>
        <option value="Head">Head</option>
        <option value="Cabinet">Cabinet</option>
        <option value="Power Amp">Power Amp</option>
        <option value="Pre-Amp">Pre-Amp</option>
      </select>
      <br/><br/>   
      <label htmlFor="make">Make</label>
      <input
        value={form.make ? form.make : ''} onChange={handleChange} id="make"
        required name="make" type="text" placeholder="Make" autoComplete="off" />
      <label htmlFor="model">Model</label>
      <input
        value={form.model ? form.model : ''} onChange={handleChange} id="model"
        required name="model" type="text" placeholder="Model" autoComplete="off" />
      <label htmlFor="wattage">Wattage</label>
      <input
        value={form.wattage ? form.wattage : ''} onChange={handleChange} id="wattage"
        required name="wattage" type="text" placeholder="Wattage" autoComplete="off" />
      <label htmlFor="speakerSize">Speaker Size</label>
      <input
        value={form.speakerSize ? form.speakerSize : ''} onChange={handleChange} id="speakerSize"
        required name="speakerSize" type="text" placeholder="Speaker Size" autoComplete="off" />
      <label htmlFor="speakerAmount">Speaker Amount</label>
      <input
        value={form.speakerAmount ? form.speakerAmount : ''} onChange={handleChange} id="speakerAmount"
        required name="speakerAmount" type="text" placeholder="Speaker Amount" autoComplete="off" />
      <label htmlFor="powerType">Power Type</label>
      <select value={form.powerType} onChange={handleChange}
        id="powerType" required name="powerType">
        <option selected value="Tube">Tube</option>
        <option value="Solid State">Solid State</option>
        <option value="Hybrid">Hybrid</option>
      </select>     
      <label htmlFor="ohmRating">Ohm Rating</label>
      <select
        value={form.ohmRating} onChange={handleChange} id="ohmRating" required name="ohmRating">
        <option value="4">4</option> 
        <option selected value="8">8</option> 
        <option value="16">16</option> 
        <option value="Multi">Multi</option> 
      </select>           
      <label htmlFor="color">Color</label>
      <input
        value={form.color ? form.color : '#ff0000'} onChange={handleChange} id="color"
        required name="color" type="color" placeholder="Color" autoComplete="off" />
      <label htmlFor="year">Year</label>
      <input
        value={form.year ? form.year : ''} onChange={handleChange} id="year"
        required name="year" type="year" autoComplete="off" /> 
      <label htmlFor="description">Description</label>
      <input
        value={form.description ? form.description : ''} onChange={handleChange} id="description"
        required name="description" type="text" placeholder="Description" autoComplete="off" />
      <label htmlFor="isWorking">Broken?</label>
      <input
        checked={form.isWorking === 'true' ? true : false} onChange={handleChange} id="isWorking" type="checkbox" autoComplete="off" name="isWorking" />
      <label htmlFor="onLoan">On Loan</label>
      <input
        checked={form.onLoan === 'true' ? true : false} onChange={handleChange} id="onLoan" type="checkbox" autoComplete="off" name="onLoan" />
    </>
  )
}

export default AmpInput
