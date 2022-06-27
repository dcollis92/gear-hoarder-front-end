import { Link } from "react-router-dom";

const GuitarCard = ({ guitar, guitarImages }) => {
  let idx = Math.floor(Math.random() * guitarImages.length);

  return (
    <Link to={`/guitars/${guitar.id}`} className="card">
      <div className="card-content">
        <div className="card-img-container">
          <img
            className="usr-img"
            src={guitarImages[idx]}
            alt={`${guitar.make} ${guitar.model}`}
          />
        </div>
        <h2 className="card-title">
          {guitar.make} {guitar.model}
        </h2>
      </div>
    </Link>
  );
};

export default GuitarCard;
