import { useState } from 'react';
import MyComponent from './components/MyComponent';
import Title from './components/Title';
import './App.css'

function App() {
  const n = 15;
  const [name] = useState('Eros');

  const redTitle = true;

  return (
    <div>
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      {/* Inline CSS */}
      <p style={{ color: 'magenta', padding: '25px', borderTop: '2px solid red' }}>
        Este elemento foi estilizado de forma inline
      </p>
      <p style={{ color: 'magenta', padding: '25px', borderTop: '2px solid red' }}>
        Este elemento foi estilizado de forma inline
      </p>
      {/* CSS inline dinâmico */}
      <h2 style={n < 10 ? ({color: 'purple'}) : ({color: 'pink'})}>CSS dinâmico</h2>
      <h2 style={n > 10 ? ({color: 'purple'}) : ({color: 'pink'})}>CSS dinâmico</h2>
      <h2 style={name === 'Eros' ? ({color: 'green', backgroundColor: '#000'}) : null}>Teste nome</h2>
      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>
      {/* CSS Modules */}
      <Title />
      <h2 className='my-title'>Testando</h2>
    </div>
  );
}

export default App;
