import "../../styles/App.css";

const FormatJsonButton = ({ textAreaRef }) => {
  const handleClick = () => {
    if (textAreaRef.current) {
      const currentValue = textAreaRef.current.value;
      try{
        textAreaRef.current.value = JSON.stringify(JSON.parse(currentValue), null, 4);
      } catch (error) {
        textAreaRef.current.value = currentValue;
      }
    }
  };

  return (
    <button onClick={handleClick} className="apply-operation dark">
      Format JSON
    </button>
  );
};

export default FormatJsonButton;
