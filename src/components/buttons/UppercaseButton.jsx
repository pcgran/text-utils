import "../../styles/App.css";

const UppercaseButton = ({ textAreaRef }) => {
  const handleClick = () => {
    if (textAreaRef.current) {
      const currentValue = textAreaRef.current.value;
      textAreaRef.current.value = currentValue.toUpperCase();
    }
  };

  return (
    <button onClick={handleClick} className="apply-operation dark">
      Uppercase
    </button>
  );
};

export default UppercaseButton;
