import {Form} from 'react-bootstrap'

const AmpInput = ({ form, handleChange }) => {
  return (
    <>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="type">Type</Form.Label>
      <Form.Select value={form.type} onChange={handleChange} 
        id="type" required name="type">
        <option value="Head">Head</option>
        <option value="Combo">Combo</option>
        <option value="Cabinet">Cabinet</option>
        <option value="Power Amp">Power Amp</option>
        <option value="Pre-Amp">Pre-Amp</option>
      </Form.Select>
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="make">Make</Form.Label>
      <Form.Control value={form.make ? form.make : ''} 
        onChange={handleChange} id="make" required 
        name="make" type="text" placeholder="Marshall" 
        autoComplete="off" />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="model">Model</Form.Label>
      <Form.Control value={form.model ? form.model : ''} 
        onChange={handleChange} id="model" required 
        name="model" type="text" placeholder="JCM 800" 
        autoComplete="off" />
    </Form.Group>
    {(form.type !== "Pre-Amp") &&
    <>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="wattage">Wattage</Form.Label>
      <Form.Control value={form.wattage ? form.wattage : ''} 
        onChange={handleChange} id="wattage" required 
        name="wattage" type="text" placeholder="100" 
        autoComplete="off" />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="ohmRating">Ohm Rating</Form.Label>
      <Form.Select value={form.ohmRating} onChange={handleChange} 
        id="ohmRating" required name="ohmRating">
        <option value="4">4</option> 
        <option value="8">8</option> 
        <option value="16">16</option> 
        <option value="Multi">Multi</option> 
      </Form.Select>
    </Form.Group>
    </>
    } 
    {(form.type !== "Cabinet") &&
    <>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="powerType">Power Type</Form.Label>
      <Form.Select value={form.powerType} onChange={handleChange}
        id="powerType" required name="powerType">
        <option value="Tube">Tube</option>
        <option value="Solid State">Solid State</option>
        <option value="Hybrid">Hybrid</option>
      </Form.Select>
    </Form.Group>
    </>
    }
    {(form.type === "Combo" || form.type === "Cabinet") &&
    <>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="speakerSize">Speaker Size</Form.Label>
      <Form.Control value={form.speakerSize ? form.speakerSize : ''} 
        onChange={handleChange} id="speakerSize" required  
        name="speakerSize" type="text" placeholder="12" 
        autoComplete="off" />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="speakerAmount">Speaker Amount</Form.Label>
      <Form.Control value={form.speakerAmount ? form.speakerAmount : ''} 
        onChange={handleChange} id="speakerAmount" required 
        name="speakerAmount" type="text" placeholder="2" 
        autoComplete="off"  />
    </Form.Group>
    </>
    }
    <Form.Group className="mb-3">
      <Form.Label htmlFor="color">Color</Form.Label>
      <Form.Control value={form.color ? form.color : ''} 
        onChange={handleChange} id="color" required 
        name="color" type="text" placeholder="Black"  
        autoComplete="off" />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="year">Year</Form.Label>
      <Form.Control value={form.year ? form.year : ''} 
        onChange={handleChange} id="year" required 
        name="year" type="year" placeholder="1969"
        autoComplete="off" />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="description">Description</Form.Label>
      <Form.Control value={form.description ? form.description : ''} 
        onChange={handleChange} id="description" required 
        name="description"  type="text" placeholder="Original UK Production" autoComplete="off" />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Check checked={form.isWorking === 'true' ? true : false} 
        onChange={handleChange} id="isWorking" type="checkbox" 
        autoComplete="off" name="isWorking" label="Broken" />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Check checked={form.onLoan === 'true' ? true : false} 
        onChange={handleChange} id="onLoan" type="checkbox" 
        autoComplete="off" name="onLoan" label="On Loan" />
    </Form.Group>  
    </>
  )
}

export default AmpInput
