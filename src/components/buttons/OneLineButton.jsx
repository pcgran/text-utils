import "../../styles/App.css";

const OneLineButton = ({ text, setText }) => {
  const handleClick = () => {
    setText(text.replace(/\s+/g, " "));
  };

  return (
    <button onClick={handleClick} className="apply-operation dark">
      One line
    </button>
  );
};

export default OneLineButton;
