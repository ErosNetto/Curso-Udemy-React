import ManageData from "./Components/ManageData";
import City from "./assets/city.jpg";
import ListRender from "./Components/ListRender";
import ConditionalRender from "./Components/ConditionalRender";

import "./App.css";

function App() {
  return (
    <div>
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em asset */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <h1>Lista</h1>
      <ListRender />
      <ConditionalRender />
    </div>
  )
}

export default App;
