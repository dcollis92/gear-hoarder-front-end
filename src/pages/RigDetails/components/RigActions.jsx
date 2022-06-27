import { useNavigate } from "react-router-dom";

const RigActions = ({ rig, user }) => {
  const navigate = useNavigate();
  return rig.profile_id === user.id ? (
    <div className="actions">
      <button
        className="btn warn"
        onClick={() => navigate(`/rigs/${rig.id}/edit`, { state: rig })}
      >
        Edit
      </button>
      <button
        className="btn danger"
        onClick={() => navigate(`/rigs/${rig.id}/confirmation`, { state: rig })}
      >
        Delete
      </button>
      <button className="btn danger" onClick={() => navigate(`/rigs`)}>
        Return
      </button>
    </div>
  ) : (
    <div className="actions">
      <button className="btn danger" onClick={() => navigate(`/rigs`)}>
        Return
      </button>
    </div>
  );
};

export default RigActions;
