import { useNavigate } from "react-router-dom";

const AmpActions = ({ amp, user }) => {
  const navigate = useNavigate();
  return (
    <div>
      <button className="btn danger" onClick={() => navigate(`/amps`)}>
        Return
      </button>
      {user ? (
        <>
          {amp.profile_id === user.id ? (
            <>
              <button
                className="btn warn"
                onClick={() => navigate(`/amps/${amp.id}/edit`, { state: amp })}
              >
                Edit
              </button>
              <button
                className="btn danger"
                onClick={() =>
                  navigate(`/amps/${amp.id}/confirmation`, { state: amp })
                }
              >
                Delete
              </button>{" "}
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AmpActions;
