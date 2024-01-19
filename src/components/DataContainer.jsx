import "../styles/App.css";

const calculateSencences = (text) => {
  if (text.length === 0) return 0;
  return text.split(/\.|\n+|\.\n+/).length;
};

const DataContainer = ({ text }) => {
  return (
    <div className="data-container">
      <div className="area-data"><span className="data-span">{text.length}</span> chars,</div>
      <div className="area-data"><span className="data-span">{calculateSencences(text)}</span> sentences</div>
    </div>
  );
};

export default DataContainer;