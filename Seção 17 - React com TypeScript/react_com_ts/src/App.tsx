import { createContext } from "react";

// 4 - Importação de componentes
import FirstComponent from "./components/firstComponent";

// 5- Desestruturando props
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";

// 6 - useState
import State from "./components/State";

// 10 - Context
import Context from "./components/Context";

// 9 - Type
type textOrNull = string | null;

type fixed = "Isso" | "Ou" | "Aquilo";

// 10 - Context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - Variaveis
  const name: string = "Eros";
  const age: number = 20;
  const isWorking: boolean = false;

  // 2 - Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  // 9 - Type
  const myText: textOrNull = "Tem algum texto aqui";
  let mySecondText: textOrNull = null;

  // mySecondText = "opa";

  const testandoFixed: fixed = "Ou";

  // 10 - Context
  const contextvalue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextvalue}>
      <div className="App">
        <h1>React com TypeScript</h1>
        <h2>Nome: {name}</h2>
        <h2>Idade: {age}</h2>
        {isWorking && <h2>Está trabalhando</h2>}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name="Segundo" />
        <Destructuring
          title="Primeiro post"
          content="Algum conteúdo"
          commentsQty={242}
          tags={["ts", "js"]}
          category={Category.TS}
        />
        <Destructuring
          title="Segundo post"
          content="Outro conteúdo"
          commentsQty={176}
          tags={["python"]}
          category={Category.P}
        />
        <State />
        {myText && <p>Tem texto na variável</p>}
        {mySecondText && <p>Tem texto na variável</p>}
        {testandoFixed && <p>Fixed</p>}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
