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
    if (selectedValue === "select-operation") return;
    if (selectedValue === "uppercase") {
      const uppercaseText = text.toUpperCase();
      setText(uppercaseText);
      return;
    }
    if (selectedValue === "lowercase") {
      const lowercaseText = text.toLowerCase();
      setText(lowercaseText);
      return;
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
