import { useState } from "react";
import '../styles/App.css';

const TextAreaWithLength = () => {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    const newText = event.target.value;
    console.log('newText: ' + newText);
    setText(newText);
  };

  const calculateSencences = (text) => {
    if (text.length === 0) return 0;
    return text.split(/\.|\n+|\.\n+/).length;
  };

  return (
    <div className="area-block">
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Type something..."
      />
      <p className="area-data">Length: {text.length}</p>
      <p className="area-data">Sentences: {calculateSencences(text)}</p>
    </div>
  );
};

export default TextAreaWithLength;
