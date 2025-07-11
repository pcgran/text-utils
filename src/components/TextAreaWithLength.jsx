import { useState } from "react";
import DataContainer from "./DataContainer";
import OperationApplier from "./OperationApplier";
import "../styles/App.css";

const TextAreaWithLength = () => {
  const [text, setText] = useState("");
  const [selectedValue, setSelectedValue] = useState('select-operation');

  const handleValueChange = (value) => {
    setSelectedValue(value);
  };

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
  };

  const handleButtonClick = () => {
    switch (selectedValue) {
      case "select-operation":
        return;
      case "uppercase":
        setText(text.toUpperCase());
        break;
      case "lowercase":
        setText(text.toLowerCase());
        break;
      case "oneline":
        setText(text.replace(/\s+/g, " "));
        break;
      case "removespaces": 
        setText(text.trim().replace(/\s+/g, ' '));
        break; 
      case "formatjson":
        try {
          setText(JSON.stringify(JSON.parse(text), null, 4));
        } catch (error) {
          setText(text);
        }
        break;
      default:
        break;
    }
  };
  

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
      <OperationApplier handleButtonClick={handleButtonClick} selectedValue={selectedValue} onValueChange={handleValueChange}/>
    </div>
  );
};

export default TextAreaWithLength;
