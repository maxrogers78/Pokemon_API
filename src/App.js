// React
import React, { useState } from "react";
import Pokemon from "./components/Pokemon";
import SearchPokemon from "./components/SearchPokemon";
// Styles
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  const [input, setInput] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

  return (
    <div>
      <GlobalStyles />
      <SearchPokemon
        input={input}
        setInput={setInput}
        pokemonData={pokemonData}
        setPokemonData={setPokemonData}
      />
      <Pokemon pokemonData={pokemonData} />
    </div>
  );
};

export default App;
