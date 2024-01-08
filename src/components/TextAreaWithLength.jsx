import { useState, useRef } from "react";
import '../styles/App.css';

const TextAreaWithLength = () => {
  const [text, setText] = useState('');
  const [selectedTextLenght, setSelectedTextLenght] = useState(0);
  const textareaRef = useRef(null);

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
  };

  const calculateSencences = (text) => {
    if (text.length === 0) return 0;
    return text.split(/\.|\n+|\.\n+/).length;
  };

  const countSelectedText = (event) => {
    if (textareaRef.current === null) return;
    var selectionStart = textareaRef.current.selectionStart;
    var selectionStart = textareaRef.current.selectionStart;
    var selectionEnd = textareaRef.current.selectionEnd;
    if (selectionStart === undefined || selectionEnd === undefined) {
      setSelectedTextLenght(0);
      return;
    }
    var newLength = textareaRef.current.value.substring(selectionStart, selectionEnd).length;
    setSelectedTextLenght(newLength);
  }

  return (
    <div className="area-block">
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleTextChange}
        placeholder="Type something..."
        onMouseUp={countSelectedText}
      />
      <div className="area-data">Length: {text.length}</div>
      <div className="area-data">Sentences: {calculateSencences(text)}</div>
      <div className="area-data">Selected text: {selectedTextLenght}</div>
    </div>
  );
};

export default TextAreaWithLength;
