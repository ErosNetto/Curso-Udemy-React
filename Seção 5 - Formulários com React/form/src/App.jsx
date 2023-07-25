import MyForm from './components/MyForm';

import './App.css'

function App() {
  return (
    <>
      <h2>Forms</h2>
      <MyForm user={{ name: 'Eros', email: 'eros@gmail.com', bio: 'Sou um advogado', role: 'admin' }}/>
    </>
  );
}

export default App;
