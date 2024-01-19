import "../styles/App.css";

const OperationApplier = ({ handleButtonClick }) => {
  return (
    <div className="operation-block">
      <select id="operation-select" className="dark" defaultValue={"select"}>
        <option value="select" disabled>
          Select operation
        </option>
        <option value="format-json">Format json</option>
      </select>
      <button id="apply-operation" className="dark" onClick={handleButtonClick}>
        Apply
      </button>
    </div>
  );
};

export default OperationApplier;
