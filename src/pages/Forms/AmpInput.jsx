const AmpInput = ({ form, handleChange }) => {
  return (
    <>
      <label htmlFor="make">Make</label>
      <input
        value={form.make ? form.make : ''} onChange={handleChange} id="make"
        required name="make" type="text" placeholder="Make" autoComplete="off"
      />
      <label htmlFor="model">Model</label>
      <input
        value={form.model ? form.model : ''} onChange={handleChange} id="model"
        required name="model" type="text" placeholder="Model" autoComplete="off"
      />
      <label htmlFor="wattage">Wattage</label>
      <input
        value={form.wattage ? form.wattage : ''} onChange={handleChange} id="wattage"
        required name="wattage" type="text" placeholder="Wattage" autoComplete="off"
      />
      <label htmlFor="speakerSize">Speaker Size</label>
      <input
        value={form.speakerSize ? form.speakerSize : ''} onChange={handleChange} id="speakerSize"
        required name="speakerSize" type="text" placeholder="Speaker Size" autoComplete="off"
      />
      <label htmlFor="speakerAmount">Speaker Amount</label>
      <input
        value={form.speakerAmount ? form.speakerAmount : ''} onChange={handleChange} id="speakerAmount"
        required name="speakerAmount" type="text" placeholder="Speaker Amount" autoComplete="off"
      />
      {/* <label htmlFor="powerType">Power Type</label>
      <input
        value={form.powerType ? form.powerType : ''} onChange={handleChange} id="power-type"
        required name="power-type" type="text" placeholder="PowerType" autoComplete="off"
      /> */}
      {/* <label htmlFor="powerType">Power Type</label>
      <select value={form.powerType} onChange={handleChange} id="powerType" required name="powerType">
        <option selected value="Tube">Tube</option>
        <option value="Solid State">Solid State</option>
        <option value="Hybrid">Hybrid</option>
      </select>     
      <label htmlFor="ohmRating">Ohm Rating</label>
      <input
        value={form.ohmRating ? form.ohmRating : ''} onChange={handleChange} id="ohmRating"
        required name="ohmRating" type="text" placeholder="OhmRating" autoComplete="off"
      />            */}
      <label htmlFor="color">Color</label>
      <input
        value={form.color ? form.color : '#ff0000'} onChange={handleChange} id="color"
        required name="color" type="color" placeholder="Color" autoComplete="off"
      />
      <label htmlFor="year">Year</label>
      <input
        value={form.year ? form.year : '1969'} onChange={handleChange} id="year"
        required name="year" type="year" autoComplete="off"
      /> 
      <label htmlFor="description">Description</label>
      <input
        value={form.description ? form.description : ''} onChange={handleChange} id="description"
        required name="description" type="text" placeholder="Description" autoComplete="off"
      />
      {/* <label htmlFor="isWorking">Is Working</label>
      <input
        value={form.isWorking ? form.isWorking : ''} onChange={handleChange} id="isWorking"
        required name="isWorking" type="text" placeholder="IsWorking" autoComplete="off"
      />
      <label htmlFor="onLoan">On Loan</label>
      <input
        value={form.onLoan ? form.onLoan : ''} onChange={handleChange} id="onLoan"
        required name="onLoan" type="text" placeholder="OnLoan" autoComplete="off"
      /> */}
    </>
  )
}

export default AmpInput
