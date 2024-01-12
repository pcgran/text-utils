import { useState } from "react";
import DataContainer from './DataContainer';
import "../styles/App.css";

const TextAreaWithLength = () => {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
  };

  return (
    <div className="area-block">
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Type something..."
        className="dark"
      />
      <DataContainer text={text} />
    </div>
  );
};

export default TextAreaWithLength;
