import { useState, ChangeEvent } from "react";
// 6 - useState

const State = () => {
  const [text, setText] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <p>O texto é: {text}</p>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default State;
