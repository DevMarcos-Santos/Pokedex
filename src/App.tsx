import { Navbar } from './components/navbar';
import SearchInput from './components/input';
import { useEffect, useState } from 'react';
import { searchPokemon } from './services/searchPokemon';
import { Cards } from './components/cards';
import ButtonSearch from './components/button';
import { searchPokemonByName } from './services/searchPokemonByName';
import { CardsByName } from './components/providerCardsByName';
import { Pokemons } from './types/types';

const App = () => {
  const [pokeName, setPokeName] = useState('');
  const [pokeData, setPokeData] = useState<string[]>([]);
  const [pokeDataByName, setPokeDataByName] = useState<Pokemons[]>([]);
  const [byName, setByName] = useState(false);
  const [notPokemon, setNotPokemon] = useState<boolean>(false);

  useEffect(() => {
    const promise = searchPokemon();
    promise.then((response) => {
      setPokeData(response as string[]);
    });
  }, []);

  const handlePokemons = () => {
    if (pokeName == '') {
      window.location.href = '/';
      return;
    }

    try {
      const result = searchPokemonByName(pokeName);
      result.then((response) => {
        setPokeDataByName(response as Pokemons[]);
      });
      setByName(true);
    } catch (error) {}
  };

  return (
    <>
      <Navbar />
      <div className="providerInputSearch">
        <SearchInput
          value={pokeName}
          onChange={(e) => setPokeName(e.target.value)}
        />
        <ButtonSearch onClick={handlePokemons} />
      </div>

      {notPokemon ? (
        <div
          style={{
            width: '100%',
            paddingTop: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <img width={'150px'} src="../src/assets/images/notPokemon.png" />
          <br />
          <b style={{ fontSize: '25px' }}>Nenhum Pokemon encontrado...</b>
        </div>
      ) : (
        <div>
          {byName ? (
            <CardsByName Data={pokeDataByName as []} />
          ) : (
            <Cards Data={pokeData} />
          )}
        </div>
      )}
    </>
  );
};

export default App;
