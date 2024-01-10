import "../styles/App.css";

const calculateSencences = (text) => {
  if (text.length === 0) return 0;
  return text.split(/\.|\n+|\.\n+/).length;
};

const DataContainer = ({ text }) => {
  return (
    <div className="data-container">
      <div className="area-data">Length: <span className="data-span">{text.length}</span></div>
      <div className="area-data">Sentences: <span className="data-span">{calculateSencences(text)}</span></div>
    </div>
  );
};

export default DataContainer;