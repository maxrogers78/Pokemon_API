// React
import React from "react";
// Axios
import axios from "axios";
// Styles
import styled from "styled-components";

const SearchPokemon = ({ input, setInput, pokemonData, setPokemonData }) => {
  const inputChangeHandler = (e) => {
    const value = e.target.value.toLowerCase();
    setInput(value);
  };

  const searchPokemonHandler = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${input}`)
      .then((data) => {
        setPokemonData(data.data);
        setInput("");
      })
      .catch((err) => {
        setPokemonData(null);
      });
  };

  return (
    <Search>
      <h1>Pokemon API</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => inputChangeHandler(e)}
      />
      <button onClick={searchPokemonHandler}>Search Pokemon</button>
    </Search>
  );
};

const Search = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40vh;
  background-color: #fdd131;
  padding: 4rem;

  h1 {
    font-size: 40px;
  }

  input {
    border: none;
    outline: none;
    width: 250px;
    height: 50px;
    border-radius: 10px;
    font-size: 24px;
    font-family: inherit;
    padding: 0 10px;
    margin-top: 30px;
    color: #a9a9a9;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 10px;
    font-size: 20px;
    font-family: inherit;
    padding: 10px 15px;
    margin-top: 10px;
    background-color: #1a73e8;
    color: #fff;
    text-transform: uppercase;
    transition: filter 150ms ease-in-out;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export default SearchPokemon;
