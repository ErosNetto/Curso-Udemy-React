import { useState } from "react";

const HookUseState = () => {
  // 1 - useState
  let userName = 'Cleiton';

  const [name, setName] = useState('Eros');

  const changeNames = () => {
    userName = 'Cleiton da Silva';
    setName('Eros Netto');

    console.log(userName);
  };
  
  console.log(name);
  
  return (
    <div>
      {/* 1 - useState */}
      <h2>useState</h2>
      <p>Varíavel: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes!</button>
      <hr />
    </div>
  );
};

export default HookUseState;