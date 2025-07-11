import "../../styles/App.css";

const OneLineButton = ({ textAreaRef }) => {
  const handleClick = () => {
    if (textAreaRef.current) {
      const currentValue = textAreaRef.current.value;
      textAreaRef.current.value = currentValue.replace(/\s+/g, " ");
    }
  };

  return (
    <button onClick={handleClick} className="apply-operation dark">
      One line
    </button>
  );
};

export default OneLineButton;
