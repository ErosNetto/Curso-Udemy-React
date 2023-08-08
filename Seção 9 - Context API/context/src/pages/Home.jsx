// import { useContext } from 'react';

// import { CounterContext } from '../context/CounterContext';
import ChangeCounter from '../components/ChangeCounter';

// 4 - refatorando com hook
import { useCounterContext } from '../hooks/useCounterContext';

// 5 - Context mais comprexo
import { useTitleColorContext } from '../hooks/useTitleColorContext';

const Home = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  // 5 - Context mais complexo
  const { color, dispatch } = useTitleColorContext();

  // 6 - Alterando contexto complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - Alterando valor context */}
      <ChangeCounter />
      {/* 6 - Alterando contexto complexo */}
      <div>
        <button onClick={() => setTitleColor('RED')}>Vermelho</button>
        <button onClick={() => setTitleColor('BLUE')}>Azul</button>
      </div>
    </>
  );
};

export default Home;