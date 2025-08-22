import { CgUnavailable } from "react-icons/cg";

const EmptyState = () => {
  return (
    <div className="empty-state">
      <p>
        <CgUnavailable className="not-available" />
      </p>
      <p className="error-msg">Search a city to get started.</p>
    </div>
  );
};

export default EmptyState;
