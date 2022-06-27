import { Link } from "react-router-dom";

const PedalCard = ({ pedal, pedalImages }) => {
  let idx = Math.floor(Math.random() * pedalImages.length);

  return (
    <Link to={`/pedals/${pedal.id}`} className="card">
      <div className="card-content">
        <div className="card-img-container">
          <img
            className="usr-img"
            src={pedalImages[idx]}
            alt={`${pedal.make} ${pedal.model}`}
          />
        </div>
        <h2 className="card-title">
          {pedal.make} {pedal.model}
        </h2>
      </div>
    </Link>
  );
};

export default PedalCard;
