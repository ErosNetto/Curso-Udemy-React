import { useContext } from 'react';

import { CounterContext } from '../context/CounterContext';
import ChangeCounter from '../components/ChangeCounter';

const Home = () => {
  const { counter } = useContext(CounterContext);

  return (
    <>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - Alterando valor context */}
      <ChangeCounter />
    </>
  );
};

export default Home;