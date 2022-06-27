import { Form } from "react-bootstrap";

const GuitarInput = ({ form, handleChange }) => {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="type">Type</Form.Label>
        <Form.Select
          value={form.type}
          onChange={handleChange}
          id="type"
          required
          name="type"
        >
          <option value="Electric">Electric</option>
          <option value="Acoustic">Acoustic</option>
          <option value="Bass">Bass</option>
          <option value="Acoustic Bass">Acoustic Bass</option>
          <option value="Baritone">Baritone</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="make">Make</Form.Label>
        <Form.Control
          value={form.make ? form.make : ""}
          onChange={handleChange}
          id="make"
          required
          name="make"
          type="text"
          placeholder="Fender"
          autoComplete="off"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="model">Model</Form.Label>
        <Form.Control
          value={form.model ? form.model : ""}
          onChange={handleChange}
          id="model"
          required
          name="model"
          type="text"
          placeholder="Jazzmaster"
          autoComplete="off"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="color">Color</Form.Label>
        <Form.Control
          value={form.color ? form.color : ""}
          onChange={handleChange}
          id="color"
          required
          name="color"
          type="text"
          placeholder="Sunburst"
          autoComplete="off"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="year">Year</Form.Label>
        <Form.Control
          value={form.year ? form.year : ""}
          onChange={handleChange}
          id="year"
          required
          name="year"
          type="year"
          placeholder="1969"
          autoComplete="off"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="description">Description</Form.Label>
        <Form.Control
          value={form.description ? form.description : ""}
          onChange={handleChange}
          id="description"
          required
          name="description"
          type="text"
          placeholder="Single Coil"
          autoComplete="off"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          checked={form.isWorking === "true" ? true : false}
          onChange={handleChange}
          id="isWorking"
          type="checkbox"
          autoComplete="off"
          name="isWorking"
          label="Broken"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          checked={form.onLoan === "true" ? true : false}
          onChange={handleChange}
          id="onLoan"
          type="checkbox"
          autoComplete="off"
          name="onLoan"
          label="On Loan"
        />
      </Form.Group>
    </>
  );
};

export default GuitarInput;
