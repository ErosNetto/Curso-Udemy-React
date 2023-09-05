import { useLayoutEffect, useEffect, useState } from 'react'

const HookUseLayoutEffect = () => {
  const [name, setNome] = useState('Algum nome');

  useEffect(() => {
    console.log('2');
    setNome('Mudou de novo!');
  }, []);

  useLayoutEffect(() => {
    console.log('1');
    setNome('Outro nome');
  }, []);

  console.log(name);

  return (
    <div>
      <h2>UseLayoutEffect</h2>
      <p>Nome: {name}</p>
      <hr />
    </div>
  );
};

export default HookUseLayoutEffect;