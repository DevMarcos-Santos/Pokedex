import { useEffect, useState } from 'react';
import ActionAreaCard from './card';
import CardByName from './cardByName';

interface Props {
  Data: [];
}

export const CardsByName = ({ Data }: Props) => {
  const [pokeData, setPokeData] = useState<string[]>([]);
  const [notPokemon, setNotPokemon] = useState<boolean>(true);

  useEffect(() => {
    if (Data == undefined) {
      setNotPokemon(true);
      setTimeout(() => {}, 1000);
    } else {
      setNotPokemon(false);
    }
    setPokeData(Data);
  });

  return (
    <div className="providerCards">
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
        <div key={pokeData[0]} className="card">
          <CardByName name={pokeData[1]} imageUrl={pokeData[2]} />
        </div>
      )}
    </div>
  );
};
