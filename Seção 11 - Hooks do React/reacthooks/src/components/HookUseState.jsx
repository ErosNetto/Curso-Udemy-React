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

  // 2 - UseState e input
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();

    // envio a uma API
    console.log(age);
  }
  
  return (
    <div>
      {/* 1 - useState */}
      <h2>useState</h2>
      <p>Varíavel: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes!</button>
      {/* 2 - useState e input */}
      <p>Digite a sua idade:</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        <input type="submit" value="Enviar" />
      </form>
      <p>Você tem {age} anos!</p>
      <hr />
    </div>
  );
};

export default HookUseState;