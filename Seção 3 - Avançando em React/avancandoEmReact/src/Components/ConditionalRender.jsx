import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);
  const [name, setname] = useState('Matheus');
  
  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso!</p>}
      
      {/* If ternário */}
      <h1>If ternário</h1>
      {name === 'Eros' ? (
        <div>
          <p>O nome é Eros</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado!</p>
        </div>
      )}
      <button onClick={() => setname('Eros')}>Clica aqui!</button>
    </div>
  );
};

export default ConditionalRender;