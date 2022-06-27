import { Link } from "react-router-dom";

const PedalContainer = ({ pedal, addPedalToCollection }) => {
  return (
    <div key={pedal.id} className="pedal-container">
      <div
        className="color-block"
        style={{ backgroundColor: pedal.color }}
      ></div>
      <Link to={`/pedals/${pedal.id}`}>
        <p>
          {pedal.make} {pedal.model}
        </p>
      </Link>
      {addPedalToCollection && (
        <form id={pedal.id} onSubmit={addPedalToCollection}>
          <button type="submit" className="btn submit">
            Add Pedal
          </button>
        </form>
      )}
    </div>
  );
};

export default PedalContainer;
