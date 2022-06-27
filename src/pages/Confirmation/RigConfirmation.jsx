import { useNavigate, useLocation, useParams, Link } from "react-router-dom";

const RigConfirmation = (props) => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const resource = "rigs";

  const handleDelete = () => {
    props.deleteRig && props.deleteRig(id);
    navigate(`/${resource}`);
  };

  return (
    <>
      <div className="page-header">
        <h1>Delete Confirmation</h1>
        {/* <img src={} alt="" /> */}
      </div>
      <section className="confirmation">
        <h2>Are you sure you want to delete {state?.name}?</h2>
        <Link className="btn submit" to={`/${resource}/${id}`}>
          Cancel
        </Link>
        <button onClick={handleDelete} type="button" className="btn danger">
          Delete!
        </button>
      </section>
    </>
  );
};

export default RigConfirmation;
