const PedalInput = ({ form, handleChange }) => {
  return (
    <>
      <label htmlFor="type">Type</label>
      <input
        value={form.type ? form.type : ''} 
        onChange={handleChange} 
        id="type" required 
        name="type" 
        type="text" 
        placeholder="Overdrive" 
        autoComplete="off" />
      <label htmlFor="make">Make</label>
      <input
        value={form.make ? form.make : ''} 
        onChange={handleChange} 
        id="make" required 
        name="make" 
        type="text" 
        placeholder="Ibanez" 
        autoComplete="off" />
      <label htmlFor="model">Model</label>
      <input
        value={form.model ? form.model : ''} 
        onChange={handleChange} 
        id="model" required 
        name="model" 
        type="text" 
        placeholder="TS9 Tube Screamer" 
        autoComplete="off" />                
      <label htmlFor="color">Color</label>
      <input
        value={form.color ? form.color : ''} 
        onChange={handleChange} 
        id="color" required 
        name="color" 
        type="text" 
        placeholder="Green" 
        autoComplete="off" />
      <label htmlFor="year">Year</label>
      <input
        value={form.year ? form.year : ''} 
        onChange={handleChange} 
        id="year" required 
        name="year" 
        type="year" 
        placeholder="1969" 
        autoComplete="off" />
      <label htmlFor="description">Description</label>
      <input
        value={form.description ? form.description : ''} 
        onChange={handleChange} 
        id="description" required 
        name="description" 
        type="text" 
        placeholder="First Generation, Made in Japan" 
        autoComplete="off" />
      <label htmlFor="isWorking">Broken?</label>
      <input
        checked={form.isWorking === 'true' ? true : false} 
        onChange={handleChange} 
        id="isWorking" 
        type="checkbox" 
        autoComplete="off" 
        name="isWorking" />
      <label htmlFor="onLoan">On Loan</label>
      <input
        checked={form.onLoan === 'true' ? true : false} 
        onChange={handleChange} 
        id="onLoan" 
        type="checkbox" 
        autoComplete="off" 
        name="onLoan" />
    </>
  )
}

export default PedalInput