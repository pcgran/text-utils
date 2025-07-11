import "../../styles/App.css";

const UppercaseButton = ({ text, setText }) => {
  const handleClick = () => {
    setText(text.toUpperCase());
  };

  return (
    <button onClick={handleClick} className="apply-operation dark">
      Uppercase
    </button>
  );
};

export default UppercaseButton;
