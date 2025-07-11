import "../../styles/App.css";

const LowercaseButton = ({ textAreaRef }) => {
  const handleClick = () => {
    if (textAreaRef.current) {
      const currentValue = textAreaRef.current.value;
      textAreaRef.current.value = currentValue.toLowerCase();
    }
  };

  return (
    <button onClick={handleClick} className="apply-operation dark">
      Lowercase
    </button>
  );
};

export default LowercaseButton;
