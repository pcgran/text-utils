import { useState, useRef } from "react";
import DataContainer from "./DataContainer";
import UppercaseButton from "./buttons/UppercaseButton";
import LowercaseButton from "./buttons/LowercaseButton";
import OneLineButton from "./buttons/OneLineButton";
import FormatJsonButton from "./buttons/FormatJsonButton";
import "../styles/App.css";

const TextAreaWithLength = () => {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
  };
  
  const textAreaRef = useRef(null);

  return (
    <div className="area-block">
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Type something..."
        className="dark"
        spellcheck="false"
      />
      <DataContainer text={text} />
      <div className="button-grid">        
        <UppercaseButton text={text} setText={setText} />
        <LowercaseButton text={text} setText={setText} />
        <OneLineButton text={text} setText={setText} />
        <FormatJsonButton text={text} setText={setText} />
      </div>
    </div>
  );
};

export default TextAreaWithLength;
