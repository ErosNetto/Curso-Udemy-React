const Challenge = () => {
    const a = 10;
    const b = 12;
    
    return (
        <div>
            <h1>Desafio 2</h1>
            <h2>Valor A: {a}</h2>
            <h2>Valor B: {b}</h2>
            <button onClick={() => console.log(a + b)}>Clique aqui para somar!</button>
        </div>
    );
};

export default Challenge;