// arquivos de estilo

import MyComponents from "./MyComponents";

const FirstComponent = () => {
    // essa função fax isso

    /*
        multi line
    */
    
    return (
        <>
            {/* Algum comentário */}
            <h1>Meu primeiro componente</h1>
            <p className="teste">Meu texto</p>
            <MyComponents />
        </>
    );
};

export default FirstComponent;