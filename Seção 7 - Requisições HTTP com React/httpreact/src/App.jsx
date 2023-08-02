import './App.css'

import { useState } from 'react';

// 4 - Custom hook
import { useFetch } from './hooks/useFetch';

const url = 'http://localhost:3000/products';

function App() {
  // const [products, setProducts] = useState([]);

  // 4 - Custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  // 1 - Resgatnado dados
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);

  //     const data = await res.json();
  
  //     setProducts(data);
  //   }

  //   fetchData();
  // }, []);

  // 2 - Add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product),
    // });

    // // 3 - Carregamento dinâmico
    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // 5 - Refatorando o POST
    httpConfig(product, 'POST');

    setName('');
    setPrice('');
  };

  // 8 - Desafio 6
  const handleRemove = (id) => {
    httpConfig(id, 'DELETE');
  };

  return (
    <>
      <div>
        <h1>Lista de Produtos</h1>
        {/* 6 - Loading */}
        {loading && <p>Carregando dados...</p>}
        {error && <p>{error}</p>}
        {!error && (
          <ul>
            {items && items.map((product) => (
              <div className="produto" key={product.id}>
                <li>{product.name} - R$: {product.price}</li>
                <button type="button" onClick={() => handleRemove(product.id)}>Excluir</button>
              </div>
            ))}
          </ul>
        )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço:
            <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
          {/* 7 - State de loading no POST  */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>

      </div> 
    </>
  )
}

export default App
