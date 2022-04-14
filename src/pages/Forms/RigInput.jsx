const RigInput = ({ form, handleChange }) => {
  return (
    <>
      <label htmlFor="name">Name</label>
      <input
        value={form.name ? form.name : ''} 
        onChange={handleChange} 
        id="name" required 
        name="name" 
        type="text" 
        placeholder="Black Sabbath rig" 
        autoComplete="off" />
      <label htmlFor="description">Description</label>
      <input
        value={form.description ? form.description : ''} 
        onChange={handleChange} 
        id="description" required 
        name="description" 
        type="text" 
        placeholder="Used by Iommi from 1970-1973..." 
        autoComplete="off" />
    </>
  )
}

export default RigInput