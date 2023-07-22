import { useState } from "react";

import ManageData from "./Components/ManageData";
import City from "./assets/city.jpg";
import ListRender from "./Components/ListRender";
import ConditionalRender from "./Components/ConditionalRender";
import ShowUserName from "./Components/ShowUserName";
import CarDetails from "./Components/CarDetails";
import Fragment from "./Components/fragment";
import Container from "./Components/Container";
import ExecuteFunction from "./Components/ExecuteFunction";
import Message from "./Components/Message";
import ChangeMessageState from "./Components/ChangeMessageState";

import "./App.css";
import UserDetails from "./Components/UserDetails";

function App() {
  // const name = 'Jorge';
  const [userName] = useState('Maria');

  const cars = [
    {id: 1, brand: 'Ferrari', color: 'Amarela', newCar: true, hm: 0},
    {id: 2, brand: 'Porsche', color: 'Preta', newCar: true, hm: 0},
    {id: 3, brand: 'KIA', color: 'Branco', newCar: false, hm: 5594},
  ]

  function showMessage() {
    console.log('Evento do componente pai!');
  }

  const [message, setMessage] = useState('');

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  // Desafio 4
  const pessoas = [
    {id: 1, nome: 'Eros', idade: 19, profissao: 'Dev Junior'},
    {id: 2, nome: 'Matheus', idade: 34, profissao: 'Mertalurgico'},
    {id: 3, nome: 'Jorge', idade: 16, profissao: 'Estudante'},
  ]

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
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand='VW' km={100000} color='Azul' newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand='Ford' color='Vermelho' km={0} newCar={true} />
      <CarDetails brand='Fiat' color='Branco' km={4500} newCar={false} />
      {/* loop em array de objetos */}
      <h1>Loop</h1>
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))}
      {/* fragment */}
      <Fragment propFragment='teste' />
      {/* children */}
      <Container myValue='testing'>
        <p>E este é o conteudo</p>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <h1>State lift</h1>
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/* Desafio 4 */}
      <h1>Desafio 4</h1>
      {pessoas.map((pessoa) => (
        <UserDetails key={pessoa.id} nome={pessoa.nome} idade={pessoa.idade} profissao={pessoa.profissao} />
      ))}
    </div>
  )
}

export default App;
