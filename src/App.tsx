import React, { useState } from "react";
import Home from "./pages/home/Home";
import "./App.css";

/*function App() {
  const [valor, setValor] = useState(0);

  function handleClick() {
    setValor(valor + 1);
  }
  return (
 <Home
      title="Home"
      description="Este é um componente Home que recebe props."
    />
    <div>
      <p>O valor é: {valor}</p>
      <button onClick={handleClick}>Adicionar 1</button>
    </div>
  );
}

export default App;
*/

function App() {
  return (
    <>
      <Home />

    </>
  );
}

export default App;
