import "../../styles/App.css";

const FormatJsonButton = ({ text, setText }) => {
  const handleClick = () => {
    try{
      setText(JSON.stringify(JSON.parse(text), null, 4));
    } catch (error) {
      setText(text);
    }
  };

  return (
    <button onClick={handleClick} className="apply-operation dark">
      Format JSON
    </button>
  );
};

export default FormatJsonButton;
