// Components
import Car from "./Car";

// CSS
import './ContainerGrid.css';

const ContainerGrid = () => {

  const cars = [
    {id: 1, name: 'Ferrari 296', brand: 'Ferrari', color: 'Amarela', km: 0},
    {id: 2, name: 'Porsche Panamera', brand: 'Porscke', color: 'Preta', km: 23150},
    {id: 3, name: 'Honda Civic', brand: 'Honda', color: 'Branco', km: 5594},
    {id: 4, name: 'Fiat Uno', brand: 'Fiat', color: 'Branco', km: 674244},
  ]

  return (
    <section>
      <h1 className="title">Salão de carros</h1>
      <div>      
        {cars.map((car) => (
          <Car key={car.id} car={car} />
        ))}
      </div>

    </section>
  );
};

export default ContainerGrid;