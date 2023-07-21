import { useState } from "react";

const ListRender = () => {
  const [list] = useState(['Eros', 'Matheus', 'Pedro', 'Cleber', 'João', 'Celso']);

  const [users, setUsers] = useState([
    {id: 1, name: 'Eros', age: 19},
    {id: 2, name: 'Matheus', age: 39},
    {id: 3, name: 'Jorge', age: 25},
    {id: 4, name: 'Cassino', age: 32},
  ])

  const handleDelete = () => {
    const randomNumber = Math.floor(Math.random() * 5);

    setUsers((prevUsers) => {
      console.log(prevUsers);
      return prevUsers.filter((user) => randomNumber !== user.id);
    })
  }

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.age}</li>
        ))}
      </ul>
      <button onClick={handleDelete}>Delete random user</button>
    </div>
  )
}

export default ListRender;