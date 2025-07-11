import { useState, useRef } from "react";
import DataContainer from "./DataContainer";
import UppercaseButton from "./buttons/UppercaseButton";
import LowercaseButton from "./buttons/LowercaseButton";
import OneLineButton from "./buttons/OneLineButton";
import RemoveSpacesButton from "./buttons/RemoveSpacesButton";
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
        ref={textAreaRef}
        value={text}
        onChange={handleTextChange}
        placeholder="Type something..."
        className="dark"
        spellcheck="false"
      />
      <DataContainer text={text} />
      <div className="button-grid">        
        <UppercaseButton textAreaRef={textAreaRef} />
        <LowercaseButton textAreaRef={textAreaRef} />
        <OneLineButton textAreaRef={textAreaRef} />
        <RemoveSpacesButton textAreaRef={textAreaRef} />
        <FormatJsonButton textAreaRef={textAreaRef} />
      </div>
    </div>
  );
};

export default TextAreaWithLength;
