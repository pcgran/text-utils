import "../../styles/App.css";

const LowercaseButton = ({ text, setText }) => {
  const handleClick = () => {
    setText(text.toLowerCase());
  };

  return (
    <button onClick={handleClick} className="apply-operation dark">
      Lowercase
    </button>
  );
};

export default LowercaseButton;
