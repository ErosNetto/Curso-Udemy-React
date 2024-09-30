import React from "react";
// 5- Desestruturando props

type Props = {
  name: string;
};

const SecondComponent = (props: Props) => {
  return (
    <div>
      <p>Meu segundo componente</p>
      <p>O nome dele é {props.name}</p>
    </div>
  );
};

export default SecondComponent;
