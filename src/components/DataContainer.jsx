import "../styles/App.css";

const calculateSencences = (text) => {
  if (text.length === 0) return 0;
  return text.split(/\.|\n+|\.\n+/).length;
};

const DataContainer = ({ text }) => {
  return (
    <div className="data-container">
      <div className="area-data">Length: <b>{text.length}</b></div>
      <div className="area-data">Sentences: <b>{calculateSencences(text)}</b></div>
    </div>
  );
};

export default DataContainer;