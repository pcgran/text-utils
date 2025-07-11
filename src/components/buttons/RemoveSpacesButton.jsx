import "../../styles/App.css";

const RemoveSpacesButton = ({ textAreaRef }) => {
  const handleClick = () => {
    if (textAreaRef.current) {
      const currentValue = textAreaRef.current.value;
      textAreaRef.current.value = currentValue.trim().replace(/\s+/g, ' ');
    }
  };

  return (
    <button onClick={handleClick} className="apply-operation dark">
      Remove spaces
    </button>
  );
};

export default RemoveSpacesButton;
