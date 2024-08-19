import { useEffect, useState } from 'react';

import { getPokemon } from '../services/getPokemon';
import { Pokemons } from '../types/types';
import ActionAreaCard from './card';

interface Props {
  Data: string[];
}

export const Cards = ({ Data }: Props) => {
  const [pokeData, setPokeData] = useState<Pokemons[]>([]);

  useEffect(() => {
    let i = -1;
    Data.forEach(() => {
      i = i + 1;
      if (i <= 400) {
        const promise = getPokemon(Data[i]);
        promise.then((response) => {
          setPokeData((prevItems) => [...prevItems, response]);
        });
      }
    });
  }, [Data]);

  return (
    <div className="providerCards">
      {pokeData.map((item) => (
        <div key={item.id} className="card">
          <ActionAreaCard
            name={item.name}
            imageUrl={item.sprites['front_default']}
            base_experience={item.base_experience}
          />
        </div>
      ))}
    </div>
  );
};
