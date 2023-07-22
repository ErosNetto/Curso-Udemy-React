const UserDetails = ({ nome, idade, profissao }) => {
  return (
    <div>
      <h2>Lista de pessoas</h2>
      <ul>
        <li>{nome}</li>
        <li>Idade: {idade}</li>
        <li>Profissão: {profissao}</li>
        {idade >= 18 ? (
          <p>Você já pode tirar carteira de motorista!</p>
        ): (
          <p>Você não pode tirar carteira de motorista!</p>
        )}
      </ul>
    </div>
  );
};

export default UserDetails;