// React
import React from "react";
// Styles
import styled from "styled-components";

const Pokemon = ({ pokemonData }) => {
  return (
    <PokemonDisplay>
      {pokemonData ? (
        <>
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <Info>
            <Stats>
              <h4>Stats</h4>
              <ul>
                <li>{pokemonData.height} kg</li>
                {pokemonData.stats.map((stat) => (
                  <li>
                    {stat.base_stat} {stat.stat.name}
                  </li>
                ))}
              </ul>
            </Stats>
            <Abilities>
              <h4>Abilities</h4>
              <ol>
                {pokemonData.abilities.map((abi) => (
                  <li>{abi.ability.name}</li>
                ))}
              </ol>
            </Abilities>
          </Info>
        </>
      ) : (
        <h2>Search for a Pokemon!</h2>
      )}
    </PokemonDisplay>
  );
};

const PokemonDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 60vh;
  background-color: #eee;
  padding: 0;

  h2 {
    font-size: 36px;
    font-family: inherit;
    font-weight: 500;
    text-transform: uppercase;
  }

  img {
    width: 150px;
    height: 150px;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  h4 {
    font-size: 24px;
    font-family: inherit;
    font-weight: normal;
    text-transform: uppercase;
    position: absolute;
    top: 0;
  }

  ul {
    margin-top: 20px;
  }
`;

const Abilities = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  h4 {
    font-size: 24px;
    font-family: inherit;
    font-weight: normal;
    text-transform: uppercase;
    position: absolute;
    top: 0;
  }
`;

export default Pokemon;
