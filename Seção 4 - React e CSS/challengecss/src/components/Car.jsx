// CSS module
import style from "./Car.module.css";

const Car = ({ car }) => {
  return (
    <div className={style.car_div}>
      <h2>{car.name}</h2>
      <h3>Marca: {car.brand}</h3>
      <h3>Cor do carro: {car.color}</h3>
      <h3>Quilometragem: {car.km}</h3>
    </div>
  );
};

export default Car;