import { Form } from "react-bootstrap";

const RigInput = ({ form, handleChange }) => {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="name">Name</Form.Label>
        <Form.Control
          value={form.name ? form.name : ""}
          onChange={handleChange}
          id="name"
          required
          name="name"
          type="text"
          placeholder="Black Sabbath rig"
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
          placeholder="Used by Iommi from 1970-1973..."
          autoComplete="off"
        />
      </Form.Group>
    </>
  );
};

export default RigInput;
