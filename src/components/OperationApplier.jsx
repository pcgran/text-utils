import "../styles/App.css";

const OperationApplier = ({
  handleButtonClick,
  selectedValue,
  onValueChange,
}) => {
  return (
    <div className="operation-block">
      <select
        id="operation-select"
        className="dark"
        value={selectedValue}
        onChange={(e) => onValueChange(e.target.value)}
      >
        <option value="select-operation" disabled>select operation</option>
        <option value="uppercase">uppercase</option>
        <option value="lowercase">lowercase</option>
        <option value="oneline">one line</option>
        <option value="formatjson">format json</option>
        <option value="removespaces">remove spaces</option>
      </select>
      <button id="apply-operation" className="dark" onClick={handleButtonClick}>
        Apply
      </button>
    </div>
  );
};

export default OperationApplier;
