import "../styles/App.css";
import { useState, useEffect } from "react";

const DataContainer = ({ text }) => {

  const [clipboard, setClipboard] = useState();

  useEffect(() => {
    setClipboard(navigator.clipboard);
  }, []);

  const calculateSencences = (text) => {
    if (text.length === 0) return 0;
    return text.split(/\.|\n+|\.\n+/).length;
  };
  
  const copyText = () => {
    clipboard.writeText(text);
  }

  return (
    <section className="data-container">
      <section id = "data-text">
        <div className="area-data"><span className="data-span">{text.length}</span> chars,</div>
        <div className="area-data"><span className="data-span">{calculateSencences(text)}</span> sentences</div>
      </section>
      <button id="copy-text" className="dark" onClick={copyText}>
        <i className="fa-solid fa-copy dark"></i>
      </button>
    </section>
  );
};

export default DataContainer;